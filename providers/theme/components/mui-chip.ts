import { MUIComponentsType } from './';

declare module '@mui/material/Chip' {
	interface ChipPropsVariantOverrides {
		secondary: true;
		success: true;
		warning: true;
		error: true;
	}
}

const muiChip: MUIComponentsType = {
	MuiChip: {
		styleOverrides: {
			root: {
				height: 'max-content',
				background: '#F3F8FC',
				borderRadius: '8px',
				variants: [
					{
						props: { variant: 'success' },
						style: {
							backgroundColor: '#ECFDF3',
							color: 'var(--success-color)',
						},
					},
					{
						props: { variant: 'error' },
						style: {
							backgroundColor: '#FEF3F2',
							color: 'var(--error-color)',
						},
					},
					{
						props: { variant: 'filled' },
						style: {
							backgroundColor: 'rgba(13, 153, 255, 0.1)',
							color: 'var(--primary-color)',
						},
					},
					{
						props: { rounded: true },
						style: {
							borderRadius: '22px',
						},
					},
					{
						props: { variant: 'outlined' },
						style: {
							borderColor: '#EAF0F6',
							backgroundColor: 'transparent',
							color: 'var(--text-secondary-color)',
						},
					},
					{
						props: { variant: 'secondary' },
						style: {
							backgroundColor: '#EAF0F6',
							color: 'var(--text-secondary-color)',
						},
					},
				],
			},
			label: {
				padding: '8px',
				variants: [
					{
						props: { size: 'small' },
						style: {
							padding: '3px 8px',
							lineHeight: '16px',
						},
					},
				],
			},
		},
	},
};

export default muiChip;
