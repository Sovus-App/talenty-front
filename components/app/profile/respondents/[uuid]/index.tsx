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
import { Header, Aside, Tabs } from './components';
import { Skeleton } from '@mui/material';

import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';

const RespondentCard = () => {
	const token = readFromLocalStorage('token');
	const params = useParams();
	const { data: respondentData, isLoading } = useSWR<{
		data: RespondentDetail;
	}>(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${GET_RESPONDENT_API_ROUTE}/${params.uuid}`,
		(key: string) => getRespondentsFetcher(key, token),
	);
	return (
		<AsideLayout aside={<Aside loading={isLoading} />}>
			{isLoading ? (
				<div className={classes.respondent_card_loading}>
					<Skeleton height="var(--layout-min-height)" variant="rectangular" />
				</div>
			) : (
				<>
					<Header
						loading={isLoading}
						respondent={respondentData?.data.respondent}
					/>
					<Tabs respondent={respondentData?.data.respondent} />
				</>
			)}
		</AsideLayout>
	);
};

export default RespondentCard;
