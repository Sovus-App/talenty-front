'use client';
import { useCallback, useMemo } from 'react';
import { PAGINATION_PAGE_QUERY_KEY } from '@/tools';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
	Box,
	FormControl,
	Grid2 as Grid,
	MenuItem,
	Pagination,
	Select as MUISelect,
	SelectChangeEvent,
	selectClasses,
	SelectProps as MUISelectProps,
	Skeleton,
	Typography,
} from '@mui/material';
import { SearchInput } from '@/components';

type SelectProps<VALUE = string> = Omit<MUISelectProps<VALUE>, 'onChange'> & {
	onChange: (value: string | number) => void;
	options: { title: string; value: string | number }[];
	loading?: boolean;
	search?: boolean;
	width: string;
	pagination?: {
		totalCount: number;
	};
};

const Select = ({
	loading,
	id,
	onChange,
	options,
	search,
	width,
	placeholder,
	label,
	pagination,
	...props
}: SelectProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const current_page = searchParams.get(PAGINATION_PAGE_QUERY_KEY) || 0;

	const onCurrentPageChange = useCallback(
		(page: number) => {
			const queryParams = new URLSearchParams(searchParams.toString());
			queryParams.set(PAGINATION_PAGE_QUERY_KEY, String(page));
			router.push(`${pathname}?${queryParams}`);
		},
		[pathname, router, searchParams],
	);
	const handleChange = (event: SelectChangeEvent) => {
		onChange(event.target.value);
	};

	const paginationCount = useMemo(() => {
		if (pagination?.totalCount) {
			return Math.ceil(pagination.totalCount / 15);
		}
		return 0;
	}, [pagination]);

	return (
		<FormControl>
			<Box component="label" sx={{ marginBottom: '8px' }} htmlFor={id}>
				{label}
			</Box>
			<MUISelect
				{...props}
				sx={{
					maxWidth: width,
					minWidth: width,
					[`& .${selectClasses.outlined}`]: {
						'& li': {
							padding: '8px 0',
						},
					},
				}}
				renderValue={(value: string) => {
					if (!value) {
						return (
							<Typography color="#717680" variant="body1">
								{placeholder}
							</Typography>
						);
					}
					return options.find((option) => option.value === value)?.title;
				}}
				MenuProps={{ autoFocus: false }}
				id={id}
				onChange={handleChange}
				displayEmpty
			>
				<Grid
					sx={{
						padding: '0 8px 8px',
						borderBottom: '1px solid #C9D8E8',
					}}
				>
					{search ? (
						<SearchInput size="small" placeholder="Поиск" fullWidth />
					) : null}
				</Grid>

				{loading ? (
					<Grid
						container
						flexDirection="column"
						gap="4px"
						sx={{ padding: '8px' }}
					>
						<Skeleton height="40px" variant="rectangular" />
						<Skeleton height="40px" variant="rectangular" />
						<Skeleton height="40px" variant="rectangular" />
					</Grid>
				) : (
					options.map((option) => (
						<MenuItem
							onClick={() => onChange(option.value)}
							key={option.value + option.title}
							value={option.value}
						>
							{option.title}
						</MenuItem>
					))
				)}
				{Boolean(pagination) && (
					<Grid
						container
						sx={{ borderTop: '1px solid #C9D8E8', padding: '8px 12px 0' }}
					>
						<Pagination
							hidePrevButton
							hideNextButton
							shape="rounded"
							count={paginationCount}
							page={Number(current_page) + 1}
							onChange={(_, page) => onCurrentPageChange(page - 1)}
						/>
					</Grid>
				)}
			</MUISelect>
		</FormControl>
	);
};

export default Select;
