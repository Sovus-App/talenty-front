'use client';
import { Columns, Table } from '@/components/table';
import { SearchInput } from '@/components';
import { Button, Chip, Grid2 as Grid } from '@mui/material';
import Link from 'next/link';
import {
	GET_RESPONDENT_API_ROUTE,
	getRespondentsFetcher,
	Respondent,
} from '@/lib';
import { ArrowRight } from '@/assets/icons';
import useSWR from 'swr';
import { readFromLocalStorage } from '@/tools';
import { useSearchParams } from 'next/navigation';

const RespondentsTable = () => {
	const token = readFromLocalStorage('token');

	const search = useSearchParams();
	const page = search.get('page') ? `page=${search.get('page')}` : '';
	const per_page = search.get('per_page')
		? `per_page=${search.get('per_page')}`
		: '';
	const searchStr = search.get('search')
		? `search=${search.get('search')}`
		: '';
	const queryParams = [page, per_page, searchStr].filter(Boolean).join('&');

	const { data: respondentsData, isLoading } = useSWR<{
		data: { respondents: Respondent[] };
		meta: { total_count: number };
	}>(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${GET_RESPONDENT_API_ROUTE}?${queryParams}`,
		(key: string) => getRespondentsFetcher(key, token),
	);

	const columns: Columns<Respondent>[] = [
		{ field: 'full_name', label: 'ФИО респондента', sx: { width: '40%' } },
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
		{ field: 'age', label: 'Возраст' },
		{
			field: 'survey_changed_at',
			label: 'Дата тестирование',
			render: (row) => {
				if (row.survey_changed_at) {
					return row.survey_changed_at;
				}
				return '–';
			},
		},
		{
			field: 'survey_status',
			label: 'Статус',
			render: (row) => {
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
			field: ' ',
			label: ' ',
			align: 'right',
			render: (row) => {
				return (
					<Link href={`/profile/respondents/${row.uuid}`}>
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
				<Grid container>
					<Button variant="contained" size="small">
						<Link href={'/profile/respondents/create'}>
							Создать респондента
						</Link>
					</Button>
				</Grid>
			</Grid>

			<Table<Respondent>
				loading={isLoading}
				dataTotalCount={respondentsData?.meta?.total_count}
				data={respondentsData?.data?.respondents || []}
				columns={columns}
			/>
		</Grid>
	);
};

export default RespondentsTable;
