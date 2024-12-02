import { MUIComponentsType } from './';
import { tabClasses } from '@mui/material';

const muiTabs: MUIComponentsType = {
	MuiTab: {
		styleOverrides: {
			root: {
				textTransform: 'none',
				[`&.${tabClasses.root}.${tabClasses.selected}`]: {
					borderBottom: '2px solid var(--primary-color)',
				},
			},
		},
	},
	MuiTabs: {
		styleOverrides: {
			root: {
				marginBottom: '16px',
				borderBottom: '2px solid #EAF0F6',
			},
		},
	},
};

export default muiTabs;
