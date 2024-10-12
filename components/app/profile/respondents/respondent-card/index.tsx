'use client';
import classes from '@/assets/styles/app/respondents.module.scss';
import useSWR from 'swr';
import {
	GET_RESPONDENT_API_ROUTE,
	getRespondentsFetcher,
	type RespondentDetail,
} from '@/lib';
import { useParams } from 'next/navigation';
import { readFromLocalStorage } from '@/tools';
import Header from './header';
import SurveysTable from '@/components/app/profile/respondents/respondent-card/surveys-table';

const RespondentCard = () => {
	const token = readFromLocalStorage('token');
	const params = useParams();
	const { data: respondentData } = useSWR<{ data: RespondentDetail }>(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${GET_RESPONDENT_API_ROUTE}/${params.uuid}`,
		(key: string) => getRespondentsFetcher(key, token),
	);
	return (
		<div className={classes.respondent_card}>
			<Header respondent={respondentData?.data?.respondent} />
			<SurveysTable tableData={respondentData?.data?.surveys} />
		</div>
	);
};

export default RespondentCard;
