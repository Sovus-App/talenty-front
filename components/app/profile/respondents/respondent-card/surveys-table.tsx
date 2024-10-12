'use client';
import classes from '@/assets/styles/app/respondents.module.scss';
import { Table } from '@/components/table';
import { Surveys } from '@/lib';
import { Button, Chip } from '@mui/material';
import { LinkIcon } from '@/assets/icons';

interface SurveysTableProps {
	tableData?: Surveys[];
}

const SurveysTable = ({ tableData }: SurveysTableProps) => {
	const columns = [
		{
			field: 'number',
			sx: { width: '40%' },
		},
		{
			field: 'survey_changed_at',
			sx: { width: '20%' },
		},
		{
			field: 'survey_status',
			sx: { width: '30%' },
			render: (row: Surveys) => {
				const status = {
					color: 'inherit',
					borderColor: 'transparent',
					label: '-',
				};
				if (row.survey_status === 'completed') {
					Object.assign(status, {
						color: '#00995A',
						borderColor: '#7FF9C6',
						label: 'пройдено',
					});
				} else if (row.survey_status === 'not_completed') {
					Object.assign(status, {
						color: '#EB0000',
						borderColor: '#FFE5E5',
						label: 'не пройдено',
					});
				}
				return (
					<Chip
						component="div"
						label={status.label}
						sx={{
							color: status.color,
							border: `1px solid ${status.borderColor}`,
							background: '#ffffff',
						}}
					/>
				);
			},
		},
		{
			field: 'link_for_respondent',
			sx: { width: '10%', textAlign: 'right' },
			render: () => {
				return (
					<Button
						sx={{ color: 'var(--primary-color)' }}
						color="primary"
						variant="text"
						startIcon={<LinkIcon />}
					>
						Скопировать
					</Button>
				);
			},
		},
	];
	return (
		<div className={classes.respondent_card_table}>
			<h2>История тестов</h2>
			{tableData ? (
				<Table<Surveys>
					hideHead
					withPagination={false}
					data={tableData}
					columns={columns}
				/>
			) : null}
		</div>
	);
};

export default SurveysTable;
