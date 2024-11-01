'use client';
import {
	Box,
	FormControl,
	Grid2 as Grid,
	MenuItem,
	Select as MUISelect,
	SelectChangeEvent,
	selectClasses,
	SelectProps as MUISelectProps,
	Skeleton,
} from '@mui/material';
import { SearchInput } from '@/components';

type SelectProps<VALUE = string> = Omit<MUISelectProps<VALUE>, 'onChange'> & {
	onChange: (value: string | number) => void;
	options: { title: string; value: string | number }[];
	loading?: boolean;
	search?: boolean;
	width: string;
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
	...props
}: SelectProps) => {
	const handleChange = (event: SelectChangeEvent) => {
		onChange(event.target.value);
	};
	return (
		<FormControl>
			<Box component="label" sx={{ marginBottom: '8px' }} htmlFor={id}>
				{label}
			</Box>
			{placeholder}
			<MUISelect
				{...props}
				sx={{
					maxWidth: width,
					minWidth: width,
					[`& .${selectClasses.outlined}`]: {
						'& li': {
							padding: '4px 0',
						},
					},
				}}
				MenuProps={{ autoFocus: false }}
				id={id}
				onChange={handleChange}
			>
				<Grid
					sx={{
						marginBottom: '4px',
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
			</MUISelect>
		</FormControl>
	);
};

export default Select;
