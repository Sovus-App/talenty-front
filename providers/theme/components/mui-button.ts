import { MUIComponentsType } from './';

const muiButton: MUIComponentsType = {
	MuiButton: {
		styleOverrides: {
			root: {
				boxShadow: 'none',
				textTransform: 'none',
				minWidth: 'auto',
				height: 'max-content',
				textAlign: 'center',
				variants: [
					{
						props: { size: 'small' },
						style: {
							padding: '4px 12px',
							borderRadius: '4px',
						},
					},
					{
						props: { size: 'medium' },
						style: {
							padding: '8px 12px',
							borderRadius: '8px',
						},
					},
					{
						props: { size: 'large' },
						style: {
							padding: '12px 16px',
							borderRadius: '12px',
						},
					},
					{
						props: { variant: 'outlined' },
						style: {
							background: 'none',
							border: '1px solid #0D99FF',
							color: '#0D99FF',
						},
					},
					{
						props: { variant: 'contained' },
						style: {
							background: '#0D99FF',
							color: '#ffffff',
						},
					},
				],
			},
		},
	},
};

export default muiButton;
