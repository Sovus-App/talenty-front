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
	dataTotalCount?: number;
	limitOptions?: number[];
	withPagination?: boolean;
	data: T[];
	columns: Columns<T>[];
	hideHead?: boolean;
}
