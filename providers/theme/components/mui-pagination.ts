import { MUIComponentsType } from './';

const muiPagination: MUIComponentsType = {
	MuiPaginationItem: {
		styleOverrides: {
			root: {
				'&.Mui-selected': {
					color: 'var(--primary-color)',
					background: 'var(--secondary-color)',
				},
			},
		},
	},
	MuiTablePagination: {
		styleOverrides: {
			input: {
				marginRight: '8px',
				border: '1px solid #D5D7DA',
				borderRadius: '8px',
			},
		},
	},
};

export default muiPagination;
