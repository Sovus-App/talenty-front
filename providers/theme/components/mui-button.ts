import '@mui/material';
import { MUIComponentsType } from './';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		secondary: true;
	}
}

const muiButton: MUIComponentsType = {
	MuiIconButton: {
		styleOverrides: {
			root: {
				padding: '4px',
				borderRadius: '4px',
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			startIcon: {
				marginRight: '4px',
				marginLeft: 0,
			},
			root: {
				boxShadow: 'none',
				textTransform: 'none',
				minWidth: 'auto',
				height: 'max-content',
				textAlign: 'center',
				color: 'inherit',
				borderRadius: '8px',
				lineHeight: '24px',
				fontSize: '15px',
				variants: [
					{
						props: { size: 'medium' },
						style: {
							maxHeight: '36px',
							padding: '6px 12px',
						},
					},
					{
						props: { size: 'large' },
						style: {
							padding: '8px 24px',
						},
					},
					{
						props: { variant: 'secondary' },
						style: {
							background: '#E7F5FF',
							color: 'var(--primary-color)',
						},
					},
					{
						props: { variant: 'outlined' },
						style: {
							background: 'none',
							border: '1px solid #0D99FF',
							color: 'var(--text-primary-color)',
						},
					},
					{
						props: { variant: 'contained' },
						style: {
							background: 'var(--primary-color)',
							color: '#ffffff',
						},
					},
				],
			},
		},
	},
};

export default muiButton;
