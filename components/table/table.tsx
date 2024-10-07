'use client';
import { ChangeEvent, useCallback } from 'react';
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
} from '@mui/material';
import { TableProps } from './types';

const Table = <T,>({
	data,
	columns,
	limitOptions = [10, 25, 50],
	dataTotalCount,
	withPagination = true,
	hideHead = false,
}: TableProps<T>) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const current_page = searchParams.get('page') || 0;
	const per_page = searchParams.get('per_page') || 10;
	const onPerPageChange = useCallback(
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const queryParams = new URLSearchParams(searchParams.toString());
			queryParams.set('per_page', event.target.value);
			router.push(`${pathname}?${queryParams}`);
		},
		[pathname, router, searchParams],
	);
	const onCurrentPageChange = useCallback(
		(page: number) => {
			const queryParams = new URLSearchParams(searchParams.toString());
			queryParams.set('current_page', String(page));
			router.push(`${pathname}?${queryParams}`);
		},
		[pathname, router, searchParams],
	);

	return (
		<Grid>
			<TableContainer sx={{ maxHeight: 650 }}>
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
						{data.map((row: T) => (
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
										<TableCell
											sx={column.sx}
											key={column.field}
											align={column.align}
										>
											{cellElement}
										</TableCell>
									);
								})}
							</TableRow>
						))}
					</TableBody>
				</MUITable>
			</TableContainer>
			{withPagination && dataTotalCount ? (
				<TablePagination
					labelRowsPerPage="Показывать по:"
					labelDisplayedRows={({ from, count, to }) => {
						return `${from}-${to} из ${count}`;
					}}
					rowsPerPageOptions={limitOptions}
					component="div"
					count={dataTotalCount}
					rowsPerPage={Number(per_page)}
					page={Number(current_page)}
					onPageChange={(_, page) => onCurrentPageChange(page)}
					onRowsPerPageChange={onPerPageChange}
				/>
			) : null}
		</Grid>
	);
};

export default Table;
