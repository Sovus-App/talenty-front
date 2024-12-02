'use client';
import { CreateSurveyHeader } from '../header';
import { CreateSurveyAction } from '../action';
import { CreateSurveyList } from '../list';
import { CreateSurveyAside } from '../aside';
import { AsideLayout, ProfileHeader } from '@/components';

import classes from '@/assets/styles/app/survey/create.module.scss';
import { useSearchParams } from 'next/navigation';
import { readFromLocalStorage } from '@/tools';
import { useMemo, useState } from 'react';
import useSWR from 'swr';
import {
	GET_RESPONDENT_API_ROUTE,
	getRespondentsFetcher,
	Respondent,
} from '@/lib';

const Container = () => {
	const search = useSearchParams();
	const token = readFromLocalStorage('token');
	const respondentUUId = search.get('respondent_uuid') || '';
	const page = search.get('page') ? `page=${search.get('page')}` : '';
	const searchStr = search.get('search')
		? `search=${search.get('search')}`
		: '';
	const queryParams = [page, 'per_page=10', searchStr]
		.filter(Boolean)
		.join('&');

	const { data: respondentsData, isLoading } = useSWR<{
		data: { respondents: Respondent[] };
		meta: { total_count: number };
	}>(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${GET_RESPONDENT_API_ROUTE}?${queryParams}`,
		(key: string) => getRespondentsFetcher(key, token),
	);

	const [respondentUUID, setRespondentUUID] = useState<string>(respondentUUId);

	const respondent = useMemo(() => {
		return respondentsData?.data.respondents.find(
			(respondent) => respondent.uuid === respondentUUID,
		);
	}, [respondentsData, respondentUUID]);

	return (
		<>
			<ProfileHeader />
			<AsideLayout
				aside={<CreateSurveyAside respondent_email={respondent?.email ?? ''} />}
			>
				<div className={classes.create_survey}>
					<CreateSurveyHeader
						respondentUUID={respondentUUID}
						setRespondentUUID={setRespondentUUID}
						respondentsData={respondentsData}
						isLoading={isLoading}
					/>
					<CreateSurveyList />
					<CreateSurveyAction />
				</div>
			</AsideLayout>
		</>
	);
};

export default Container;
