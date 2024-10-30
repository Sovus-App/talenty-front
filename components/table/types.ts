import { ReactNode } from 'react';
import { SxProps } from '@mui/system';

export interface Columns<T> {
	label?: string;
	field?: string;
	align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
	sx?: SxProps;
	render?: (row: T) => ReactNode;
	format?: (value?: string | number) => string | number;
}

export interface TableProps<T> {
	sx?: SxProps;
	loading?: boolean;
	dataTotalCount?: number;
	limitOptions?: number[];
	pagination?: {
		limit: boolean;
		pages: boolean;
	};
	data: T[];
	columns: Columns<T>[];
	hideHead?: boolean;
}
