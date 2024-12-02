'use client';

import Link from 'next/link';
import { Select } from '@/components';
import { Respondent } from '@/lib';
import classes from '@/assets/styles/app/survey/create.module.scss';
import { Typography } from '@mui/material';

interface CreateSurveyHeaderProps {
	isLoading: boolean;
	respondentsData?: {
		data: { respondents: Respondent[] };
		meta: { total_count: number };
	};
	setRespondentUUID: (respondentUUID: string) => void;
	respondentUUID: string;
}

const Header = ({
	setRespondentUUID,
	respondentUUID,
	isLoading,
	respondentsData,
}: CreateSurveyHeaderProps) => {
	return (
		<div className={classes.create_survey_header}>
			<h1>Новое тестирование</h1>
			<div className={classes.create_survey_header_respondent}>
				<Select
					width="350px"
					search
					pagination={{ totalCount: respondentsData?.meta?.total_count || 0 }}
					size="small"
					loading={isLoading}
					placeholder="Выберите"
					label="Выберите респондента"
					id="respondents-select"
					onChange={(value) => {
						setRespondentUUID(value as string);
					}}
					value={respondentUUID}
					options={
						respondentsData?.data?.respondents.map((respondent) => ({
							title: respondent.full_name,
							value: respondent.uuid,
						})) || []
					}
				/>
				<div>
					<Typography variant="body1" sx={{ paddingTop: '28px' }}>
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
