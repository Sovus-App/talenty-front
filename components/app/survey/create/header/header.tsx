'use client';

import useSWR from 'swr';
import Link from 'next/link';
import { useState } from 'react';
import { Select } from '@/components';
import { useSearchParams } from 'next/navigation';
import { readFromLocalStorage } from '@/tools';
import {
	GET_RESPONDENT_API_ROUTE,
	getRespondentsFetcher,
	Respondent,
} from '@/lib';
import classes from '@/assets/styles/components/app/survey/create.module.scss';
import { Typography } from '@mui/material';

const Header = () => {
	const search = useSearchParams();
	const token = readFromLocalStorage('token');
	const respondentUUID = search.get('respondent_uuid') || '';

	const [respondent, setRespondent] = useState<string>(respondentUUID);

	const { data: respondentsData, isLoading } = useSWR<{
		data: { respondents: Respondent[] };
		meta: { total_count: number };
	}>(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${GET_RESPONDENT_API_ROUTE}`,
		(key: string) => getRespondentsFetcher(key, token),
	);

	return (
		<div className={classes.create_survey_header}>
			<h1>Новое тестирование</h1>
			<div className={classes.create_survey_header_respondent}>
				{respondentsData ? (
					<Select
						width="350px"
						search
						size="small"
						loading={isLoading}
						label="Выберите респондента"
						id="respondents-select"
						onChange={(value) => {
							setRespondent(value as string);
						}}
						value={respondent}
						options={respondentsData?.data?.respondents.map((respondent) => ({
							title: respondent.full_name,
							value: respondent.uuid,
						}))}
					/>
				) : null}
				<div>
					<Typography variant="body1" sx={{ paddingTop: '24px' }}>
						или{' '}
						<Link href="/profile/respondents/create">
							создать нового респондента
						</Link>
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default Header;
