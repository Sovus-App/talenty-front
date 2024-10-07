'use client';
import { createTheme } from '@mui/material/styles';
import components from './components';

const theme = createTheme({
	typography: {
		fontFamily: 'var(--font-inter)',
		body1: {
			lineHeight: '20px',
			fontSize: '15px',
			color: '#1E1E1E',
		},
	},
	palette: {
		primary: { main: '#0D99FF' },
	},
	components,
});

export default theme;
