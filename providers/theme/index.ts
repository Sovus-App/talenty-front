'use client';
import { createTheme } from '@mui/material/styles';
import { ruRU } from '@mui/x-date-pickers/locales';
import components from './components';
import type {} from '@mui/x-date-pickers/themeAugmentation';

const theme = createTheme(
	{
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
	},
	ruRU,
);

export default theme;
