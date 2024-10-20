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
import { getSurveyStatusProps, readFromLocalStorage } from '@/tools';
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
							background: '#F0F5F8',
						}}
					/>
				);
			},
		},
		{ field: 'age', label: 'Возраст' },
		{
			field: 'survey_changed_at',
			label: 'Тест создан',
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
			field: 'survey_completed_at',
			label: 'Тест пройден',
			render: (row) => {
				if (row.survey_completed_at) {
					return row.survey_completed_at;
				}
				return '–';
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
				maxHeight="40px"
				container
				marginBottom="16px"
				justifyContent="space-between"
				alignItems="center"
			>
				<SearchInput
					size="small"
					placeholder="Поиск респондента"
					fullWidth
					sx={{ maxWidth: 'var(--form-max-width)' }}
				/>
				<Grid container>
					<Button variant="contained" size="medium">
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
