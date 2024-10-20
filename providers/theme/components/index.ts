import { Components, CssVarsTheme, Theme } from '@mui/material';

import muiForm from './mui-form';
import muiChip from './mui-chip';
import muiTable from './mui-table';
import muiInput from './mui-input';
import muiButton from './mui-button';
import muiPagination from './mui-pagination';

export type MUIComponentsType = Components<
	Omit<Theme, 'components' | 'palette'> & CssVarsTheme
>;

const components: MUIComponentsType = {
	...muiButton,
	...muiChip,
	...muiTable,
	...muiInput,
	...muiPagination,
	...muiForm,
};

export default components;
