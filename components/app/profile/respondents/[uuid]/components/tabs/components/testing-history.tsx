import moment from 'moment/moment';
import { copyRespondentSurveyLink, getSurveyStatusProps } from '@/tools';
import { RespondentSurvey } from '@/lib/profile/respondents/types';

import { Chip, Table } from '@/components';
import { Columns } from '@/components/table';
import { Button } from '@mui/material';
import { CopyIcon } from '@/assets/icons';

import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';

interface TestingHistoryProps {
	data: RespondentSurvey[];
}

const TestingHistory = ({ data }: TestingHistoryProps) => {
	const columns: Columns<RespondentSurvey>[] = [
		{ field: 'survey_id', sx: { width: '40%' } },
		{
			field: 'survey_created_at',
			render: (row) => (
				<Chip
					rounded
					size="small"
					variant="outlined"
					label={{
						text: `Отправлен: ${moment(row.survey_created_at).format('DD.MM.YYYY')}`,
					}}
				/>
			),
		},
		{
			field: 'survey_status',
			render: (row) => {
				const props = getSurveyStatusProps(row.survey_status);
				return <Chip {...props} size="small" rounded />;
			},
		},
		{
			field: 'survey_uuid',
			render: (row) => {
				return (
					<Button
						sx={{ color: 'var(--primary-color)', padding: 0 }}
						color="primary"
						variant="text"
						onClick={() => copyRespondentSurveyLink(row.survey_uuid)}
						startIcon={<CopyIcon />}
					>
						Ссылка на тест
					</Button>
				);
			},
		},
	];
	return (
		<div className={classes.respondent_card_testing_history}>
			<Table<RespondentSurvey> data={data} columns={columns} hideHead />
		</div>
	);
};

export default TestingHistory;
