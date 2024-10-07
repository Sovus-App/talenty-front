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
				whiteSpace: 'nowrap',
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				borderBottom: '1px solid #C9D8E8',
			},
			head: {
				color: '#141414',
				fontWeight: 600,
				borderBottom: '2px solid #C9D8E8',
			},
		},
	},
};

export default muiTable;
