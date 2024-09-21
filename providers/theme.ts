'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'var(--font-inter)',
	},
	palette: {
		primary: { main: '#0D99FF' },
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					borderRadius: '4px',
					minWidth: 'auto',
					variants: [
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
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: '4px',
					background: '#F0F5F8',
				},
			},
		},
	},
});

export default theme;
