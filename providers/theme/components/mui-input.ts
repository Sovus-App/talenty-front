import { MUIComponentsType } from './';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const muiInput: MUIComponentsType = {
	MuiInputAdornment: {
		styleOverrides: {
			root: {
				marginRight: 0,
			},
		},
	},
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				borderRadius: '8px',
				'&:hover': {
					[`.${outlinedInputClasses.notchedOutline}`]: {
						borderColor: 'var(--primary-color)',
					},
				},
			},
		},
	},
	MuiInputBase: {
		styleOverrides: {
			multiline: {
				'& textarea': {
					padding: '0 !important',
				},
			},
			input: {
				height: 'max-content',
				variants: [
					{
						props: { size: 'small' },
						style: {
							padding: '8px 12px !important',
						},
					},
					{
						props: { size: 'medium' },
						style: {
							padding: '12px 16px !important',
						},
					},
				],
			},
		},
	},
};

export default muiInput;
