'use client';
import useSWR from 'swr';
import {
	GET_RESPONDENT_API_ROUTE,
	getRespondentsFetcher,
	type RespondentDetail,
} from '@/lib';
import { useParams } from 'next/navigation';
import { readFromLocalStorage } from '@/tools';
import { AsideLayout } from '@/components';
import Header from './header';
import TestingHistoryTable from './testing-history-table';
import Aside from './aside';
import Reports from './reports';

const RespondentCard = () => {
	const token = readFromLocalStorage('token');
	const params = useParams();
	const { data: respondentData } = useSWR<{ data: RespondentDetail }>(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${GET_RESPONDENT_API_ROUTE}/${params.uuid}`,
		(key: string) => getRespondentsFetcher(key, token),
	);
	return (
		<AsideLayout
			header={<Header respondent={respondentData?.data?.respondent} />}
			aside={<Aside />}
		>
			<TestingHistoryTable tableData={respondentData?.data?.surveys} />
			<Reports />
		</AsideLayout>
	);
};

export default RespondentCard;
