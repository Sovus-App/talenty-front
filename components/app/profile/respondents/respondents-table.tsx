'use client';
import useSWR from 'swr';
import moment from 'moment';
import Link from 'next/link';
import { GENDERS, getSurveyStatusProps, readFromLocalStorage } from '@/tools';
import { useRouter, useSearchParams } from 'next/navigation';
import {
	GET_RESPONDENT_API_ROUTE,
	getRespondentsFetcher,
	Respondent,
} from '@/lib';

import { SearchInput, Chip } from '@/components';
import { Columns, Table } from '@/components/table';
import { Button, Grid2 as Grid, Typography } from '@mui/material';
import { EmptyRespondentsTable } from './empty';

const RespondentsTable = () => {
	const token = readFromLocalStorage('token');

	const router = useRouter();
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
		{ field: 'full_name', label: 'ФИО респондента', sx: { width: '30%' } },
		{
			field: 'gender',
			label: 'Пол',
			render: (row) => (
				<Chip
					rounded
					size="small"
					variant="outlined"
					label={{ text: GENDERS[row.gender] ?? '–' }}
				/>
			),
		},
		{
			field: 'date_of_birth',
			label: 'Возраст',
			render: (row) => (
				<Typography color="var(--text-secondary-color)" variant="body1">
					{row.date_of_birth
						? `${moment(new Date()).diff(new Date(row.date_of_birth), 'years')} лет`
						: '–'}
				</Typography>
			),
		},
		{
			field: 'survey_created_at',
			label: 'Тест создан',
			render: (row) => (
				<Chip
					rounded
					size="small"
					variant="secondary"
					label={{
						text: row.current_survey.survey_created_at
							? moment(row.current_survey.survey_created_at).format(
									'DD.MM.YYYY',
								)
							: '–',
					}}
				/>
			),
		},
		{
			field: 'survey_status',
			label: 'Статус',
			sort: 'survey_status',
			render: (row) => {
				const props = getSurveyStatusProps(row.current_survey.survey_status);
				return <Chip {...props} size="small" rounded />;
			},
		},
		{
			field: 'survey_completed_at',
			label: 'Тест пройден',
			sort: 'survey_completed_at',
			render: (row) => (
				<Typography color="var(--text-secondary-color)" variant="body1">
					{row.current_survey.survey_completed_at
						? moment(row.current_survey.survey_completed_at).format(
								'DD.MM.YYYY',
							)
						: '–'}
				</Typography>
			),
		},
	];

	return (
		<Grid container flexDirection="column">
			{respondentsData?.data?.respondents?.length ? (
				<>
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
							<Button variant="contained" size="large">
								<Link href={'/profile/respondents/create'}>
									Создать респондента
								</Link>
							</Button>
						</Grid>
					</Grid>

					<Table<Respondent>
						onRowClick={(row) =>
							router.push(`/profile/respondents/${row.uuid}`)
						}
						loading={isLoading}
						dataTotalCount={respondentsData?.meta?.total_count}
						data={respondentsData?.data?.respondents || []}
						columns={columns}
						sx={{ maxHeight: 600, minHeight: 600 }}
					/>
				</>
			) : (
				!isLoading && <EmptyRespondentsTable />
			)}
		</Grid>
	);
};

export default RespondentsTable;
