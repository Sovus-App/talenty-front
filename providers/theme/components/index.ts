import { Components, CssVarsTheme, Theme } from '@mui/material';

import muiChip from './mui-chip';
import muiButton from './mui-button';
import muiTable from './mui-table';
import muiInput from './mui-input';

export type MUIComponentsType = Components<
	Omit<Theme, 'components' | 'palette'> & CssVarsTheme
>;

const components: MUIComponentsType = {
	...muiButton,
	...muiChip,
	...muiTable,
	...muiInput,
};

export default components;
