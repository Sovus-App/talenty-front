'use client';
import { ChangeEvent, useCallback, useMemo } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import {
	Grid2 as Grid,
	TableContainer,
	Table as MUITable,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TablePagination,
	Skeleton,
	Pagination,
	IconButton,
} from '@mui/material';
import { TableProps } from './types';
import { SortTable } from '@/assets/icons';

const TABLE_PAGE_QUERY_KEY = 'page';
const TABLE_PER_PAGE_QUERY_KEY = 'per_page';
const TABLE_SORT_QUERY_KEY = 'sort';
const TABLE_SORT_DIRECTION_QUERY_KEY = 'sort_direction';

const Table = <T,>({
	data = [],
	columns,
	loading,
	limitOptions = [10, 25, 50],
	dataTotalCount,
	pagination = {
		pages: true,
		limit: true,
	},
	hideHead = false,
	onRowClick,
	sx,
}: TableProps<T>) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const sortDirection = searchParams.get(TABLE_SORT_DIRECTION_QUERY_KEY) || '';
	const current_page = searchParams.get(TABLE_PAGE_QUERY_KEY) || 0;
	const per_page = searchParams.get(TABLE_PER_PAGE_QUERY_KEY) || 10;
	const onPerPageChange = useCallback(
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const queryParams = new URLSearchParams(searchParams.toString());
			queryParams.set(TABLE_PER_PAGE_QUERY_KEY, event.target.value);
			router.push(`${pathname}?${queryParams}`);
		},
		[pathname, router, searchParams],
	);
	const onCurrentPageChange = useCallback(
		(page: number) => {
			const queryParams = new URLSearchParams(searchParams.toString());
			queryParams.set(TABLE_PAGE_QUERY_KEY, String(page));
			router.push(`${pathname}?${queryParams}`);
		},
		[pathname, router, searchParams],
	);

	const onChangeSort = useCallback(
		(sort: string) => {
			const queryParams = new URLSearchParams(searchParams.toString());
			queryParams.set(TABLE_SORT_QUERY_KEY, String(sort));
			queryParams.set(
				TABLE_SORT_DIRECTION_QUERY_KEY,
				sortDirection === 'asc' ? 'desc' : 'asc',
			);
			router.push(`${pathname}?${queryParams}`);
		},
		[pathname, router, searchParams, sortDirection],
	);

	const paginationCount = useMemo(() => {
		if (dataTotalCount && per_page) {
			return Math.ceil(dataTotalCount / Number(per_page));
		}
		return 0;
	}, [per_page, dataTotalCount]);

	const TableBodyContent = () => {
		if (loading) {
			return (
				<TableRow>
					<TableCell colSpan={columns?.length}>
						<Skeleton variant="rectangular" height="400px" />
					</TableCell>
				</TableRow>
			);
		}
		if (data.length) {
			return data.map((row: T) => (
				<TableRow
					hover
					sx={onRowClick ? { cursor: 'pointer' } : undefined}
					key={(row as { id: number }).id}
					onClick={() => {
						if (onRowClick) {
							onRowClick(row);
						}
					}}
				>
					{columns.map((column) => {
						const value = column.field
							? (row as Record<string, string | number>)[column.field]
							: undefined;
						const cellElement = column.render
							? column.render(row)
							: column.format
								? column.format(value)
								: value;
						return (
							<TableCell sx={column.sx} key={column.field} align={column.align}>
								{cellElement}
							</TableCell>
						);
					})}
				</TableRow>
			));
		}
		return (
			<TableRow>
				<TableCell sx={{ textAlign: 'center' }} colSpan={columns?.length}>
					Нет данных
				</TableCell>
			</TableRow>
		);
	};

	return (
		<Grid>
			<TableContainer sx={{ marginBottom: '16px', ...sx }}>
				<MUITable stickyHeader aria-label="sticky table">
					{!hideHead ? (
						<TableHead>
							<TableRow>
								{columns.map((column) => {
									const Label = () => {
										if (column.sort) {
											return (
												<Grid gap="8px" container alignItems="center">
													<Grid>{column.label}</Grid>
													<Grid>
														<IconButton
															onClick={() => {
																onChangeSort(column.sort || '');
															}}
														>
															<SortTable />
														</IconButton>
													</Grid>
												</Grid>
											);
										}
										return <>{column.label}</>;
									};
									return (
										<TableCell
											key={column.field}
											align={column.align || 'left'}
											sx={{ ...column.sx }}
										>
											<Label />
										</TableCell>
									);
								})}
							</TableRow>
						</TableHead>
					) : null}
					<TableBody>
						<TableBodyContent />
					</TableBody>
				</MUITable>
			</TableContainer>
			{dataTotalCount ? (
				<Grid alignItems="center" justifyContent="space-between" container>
					{pagination?.pages && (
						<Pagination
							hidePrevButton
							hideNextButton
							shape="rounded"
							count={paginationCount}
							page={Number(current_page) + 1}
							onChange={(_, page) => onCurrentPageChange(page - 1)}
						/>
					)}

					{pagination?.limit && (
						<TablePagination
							slotProps={{
								actions: {
									previousButton: { style: { display: 'none' } },
									nextButton: { style: { display: 'none' } },
								},
							}}
							labelRowsPerPage="Показывать по:"
							labelDisplayedRows={({ count }) => {
								return ` из ${count}`;
							}}
							rowsPerPageOptions={limitOptions}
							component="div"
							count={dataTotalCount}
							rowsPerPage={Number(per_page)}
							page={Number(current_page)}
							onPageChange={(_, page) => onCurrentPageChange(page)}
							onRowsPerPageChange={onPerPageChange}
						/>
					)}
				</Grid>
			) : null}
		</Grid>
	);
};

export default Table;
