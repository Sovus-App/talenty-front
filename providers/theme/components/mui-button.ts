import '@mui/material';
import { MUIComponentsType } from './';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		secondary: true;
	}
}

const muiButton: MUIComponentsType = {
	MuiButton: {
		styleOverrides: {
			root: {
				boxShadow: 'none',
				textTransform: 'none',
				minWidth: 'auto',
				height: 'max-content',
				textAlign: 'center',
				color: 'inherit',
				variants: [
					{
						props: { size: 'small' },
						style: {
							padding: '4px 12px',
							borderRadius: '8px',
						},
					},
					{
						props: { size: 'medium' },
						style: {
							fontSize: '15px',
							padding: '6px 12px',
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
							color: 'var(--primary-color)',
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
