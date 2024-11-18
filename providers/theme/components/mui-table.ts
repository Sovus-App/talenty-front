import { MUIComponentsType } from './';

const muiTable: MUIComponentsType = {
	MuiTable: {
		styleOverrides: {
			root: {
				borderColor: '#C9D8E8',
			},
		},
	},
	MuiTableCell: {
		styleOverrides: {
			root: {
				fontSize: '15px',
				lineHeight: '20px',
				padding: '8px',
				whiteSpace: 'nowrap',
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				borderBottom: '1px solid #C9D8E8',
			},
			head: {
				fontSize: '14px',
				color: 'var(--text-secondary-color)',
				borderBottom: '2px solid #C9D8E8',
			},
		},
	},
};

export default muiTable;
