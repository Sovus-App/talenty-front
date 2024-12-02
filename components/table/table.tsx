'use client';
import { ChangeEvent, useCallback, useMemo } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { TableProps } from './types';
import {
	PAGINATION_PAGE_QUERY_KEY,
	PAGINATION_PER_PAGE_QUERY_KEY,
	PAGINATION_SORT_QUERY_KEY,
} from '@/tools';

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
import { SortTable } from '@/assets/icons';

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
	const sortProperty = searchParams.get(PAGINATION_SORT_QUERY_KEY) || '';
	const current_page = searchParams.get(PAGINATION_PAGE_QUERY_KEY) || 0;
	const per_page = searchParams.get(PAGINATION_PER_PAGE_QUERY_KEY) || 10;
	const onPerPageChange = useCallback(
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const queryParams = new URLSearchParams(searchParams.toString());
			queryParams.set(PAGINATION_PER_PAGE_QUERY_KEY, event.target.value);
			router.push(`${pathname}?${queryParams}`);
		},
		[pathname, router, searchParams],
	);
	const onCurrentPageChange = useCallback(
		(page: number) => {
			const queryParams = new URLSearchParams(searchParams.toString());
			queryParams.set(PAGINATION_PAGE_QUERY_KEY, String(page));
			router.push(`${pathname}?${queryParams}`);
		},
		[pathname, router, searchParams],
	);

	const onChangeSort = useCallback(
		(sort: string) => {
			const queryParams = new URLSearchParams(searchParams.toString());
			const asc = sort + '_asc';
			const desc = sort + '_desc';

			const sortList = sortProperty.split(',').filter(Boolean);
			const sortIndex = sortList.findIndex((sort_property) =>
				sort_property.includes(sort),
			);
			let updatedSort = sortList.length ? [...sortList, asc] : [asc];

			if (sortIndex >= 0) {
				updatedSort = sortList.map((sort_property, index) => {
					if (index === sortIndex) {
						return sort_property === asc ? desc : asc;
					}
					return sort_property;
				});
			}

			queryParams.set(PAGINATION_SORT_QUERY_KEY, updatedSort.join(','));
			router.push(`${pathname}?${queryParams}`);
		},
		[pathname, router, searchParams, sortProperty],
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
					key={(row as { id: number }).id ?? (row as { uuid: number }).uuid}
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
									return (
										<TableCell
											key={column.field}
											align={column.align || 'left'}
											sx={{ ...column.sx }}
										>
											{column.sort ? (
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
											) : (
												column.label
											)}
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
