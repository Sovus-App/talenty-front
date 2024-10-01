'use client';
import { Columns, Table } from '@/components/table';
import { SearchInput } from '@/components';
import { Button, Chip, Grid2 as Grid } from '@mui/material';
import Link from 'next/link';
import { GetRespondentsSchema } from '@/lib';
import { ArrowRight } from '@/assets/icons';

interface RespondentsTableProps {
	tableData: GetRespondentsSchema[];
}

const RespondentsTable = ({ tableData }: RespondentsTableProps) => {
	const columns: Columns<GetRespondentsSchema>[] = [
		{ field: 'fullName', label: 'ФИО респондента', sx: { width: '40%' } },
		{
			field: 'gender',
			label: 'Пол',
			render: (row) => {
				return (
					<Chip
						component="div"
						label={row.gender === 'male' ? 'мужской' : 'женский'}
						sx={{
							borderRadius: '4px',
							background: '#F0F5F8',
						}}
					/>
				);
			},
		},
		{ field: 'age', label: 'Возраст', format: (value) => `${value} лет` },
		{ field: 'testing_date', label: 'Дата тестирование' },
		{
			field: 'status',
			label: 'Статус',
			render: (row) => {
				const status = {
					color: 'inherit',
					borderColor: 'transparent',
					label: row.status.name,
				};
				if (row.status.id === 0) {
					Object.assign(status, {
						color: '#00995A',
						borderColor: '#7FF9C6',
					});
				} else if (row.status.id === 1) {
					Object.assign(status, {
						color: '#EB0000',
						borderColor: '#FFE5E5',
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
			field: ' ',
			label: ' ',
			align: 'right',
			render: (row) => {
				return (
					<Link href={`/profile/respondents/${row.id}`}>
						<ArrowRight />
					</Link>
				);
			},
		},
	];

	return (
		<Grid container flexDirection="column">
			<Grid
				maxHeight="30px"
				container
				marginBottom="16px"
				justifyContent="space-between"
				alignItems="center"
			>
				<SearchInput
					size="small"
					placeholder="Поиск респондента"
					fullWidth
					sx={{ maxWidth: 'var(--form-lg-max-width)' }}
				/>
				<Button variant="contained" size="small">
					<Link href={'/profile/respondents/create'}>Создать респондента</Link>
				</Button>
			</Grid>
			<Table<GetRespondentsSchema>
				dataTotalCount={tableData.length}
				data={tableData}
				columns={columns}
			/>
		</Grid>
	);
};

export default RespondentsTable;
