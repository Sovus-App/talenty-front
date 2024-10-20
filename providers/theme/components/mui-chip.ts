import { MUIComponentsType } from './';

const muiChip: MUIComponentsType = {
	MuiChip: {
		styleOverrides: {
			root: {
				height: 'auto',
				borderRadius: '16px',
				background: '#F0F5F8',
				variants: [
					{
						props: { size: 'medium' },
						style: {
							padding: '2px 8px',
						},
					},
				],
			},
		},
	},
};

export default muiChip;
