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
} from '@mui/material';
import { TableProps } from './types';

const TABLE_PAGE_QUERY_KEY = 'page';
const TABLE_PER_PAGE_QUERY_KEY = 'per_page';

const Table = <T,>({
	data = [],
	columns,
	loading,
	limitOptions = [10, 25, 50],
	dataTotalCount,
	withPagination = true,
	hideHead = false,
}: TableProps<T>) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
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
					role="checkbox"
					tabIndex={-1}
					key={(row as { id: number }).id}
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
			<TableContainer
				sx={{ maxHeight: 600, minHeight: 600, marginBottom: '16px' }}
			>
				<MUITable stickyHeader aria-label="sticky table">
					{!hideHead ? (
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.field}
										align={column.align || 'left'}
										sx={{ ...column.sx }}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
					) : null}
					<TableBody>
						<TableBodyContent />
					</TableBody>
				</MUITable>
			</TableContainer>
			{withPagination && dataTotalCount ? (
				<Grid alignItems="center" justifyContent="space-between" container>
					<Pagination
						hidePrevButton
						hideNextButton
						shape="rounded"
						count={paginationCount}
						page={Number(current_page) + 1}
						onChange={(_, page) => onCurrentPageChange(page - 1)}
					/>
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
				</Grid>
			) : null}
		</Grid>
	);
};

export default Table;
