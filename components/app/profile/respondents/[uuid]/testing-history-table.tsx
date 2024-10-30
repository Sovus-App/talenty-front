'use client';
import moment from 'moment';
import { getSurveyStatusProps } from '@/tools';

import { Table } from '@/components/table';
import { Surveys } from '@/lib';
import { Button, Chip, Grid2 as Grid } from '@mui/material';
import { LinkIcon } from '@/assets/icons';

import classes from '@/assets/styles/components/app/profile/respondents/respondents.module.scss';

interface TestingHistoryTableProps {
	tableData?: Surveys[];
}

const TestingHistoryTable = ({ tableData }: TestingHistoryTableProps) => {
	const columns = [
		{
			field: 'id',
			sx: { width: '40%' },
			format: (value?: number | string) => `Тест № ${value}`,
		},
		{
			field: 'survey_changed_at',
			sx: { width: '20%' },
			format: (value?: number | string) => moment(value).format('DD.MM.YYYY'),
		},
		{
			field: 'survey_status',
			sx: { width: '30%' },
			render: (row: Surveys) => {
				const props = getSurveyStatusProps(row.survey_status);
				return (
					<Chip
						component="div"
						avatar={
							<Grid
								sx={{
									borderRadius: '50%',
									backgroundColor: props.color,
									width: '6px !important',
									height: '6px !important',
								}}
							/>
						}
						label={props.label}
						sx={{
							color: props.color,
							backgroundColor: props.backgroundColor,
						}}
					/>
				);
			},
		},
		{
			field: 'survey_uuid',
			sx: { width: '10%', textAlign: 'right' },
			render: (row: Surveys) => {
				return (
					<Button
						sx={{ color: 'var(--primary-color)', padding: 0 }}
						color="primary"
						variant="text"
						onClick={() =>
							navigator.clipboard.writeText(
								window.location.origin + `/survey/${row.survey_uuid}`,
							)
						}
						startIcon={<LinkIcon />}
					>
						Скопировать ссылку
					</Button>
				);
			},
		},
	];
	return (
		<div className={classes.respondent_card_testing_history}>
			<h2>История тестов</h2>
			{tableData ? (
				<Table<Surveys>
					hideHead
					dataTotalCount={1}
					pagination={{ pages: true, limit: false }}
					data={tableData}
					columns={columns}
				/>
			) : null}
		</div>
	);
};

export default TestingHistoryTable;
