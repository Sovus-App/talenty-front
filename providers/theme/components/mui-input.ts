import { MUIComponentsType } from './';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { svgIconClasses } from '@mui/material';

const muiInput: MUIComponentsType = {
	MuiCheckbox: {
		styleOverrides: {
			root: {
				padding: 0,
				marginRight: '8px',
				[`& .${svgIconClasses.root}`]: {
					width: '20px',
					height: '20px',
				},
			},
		},
	},
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
							lineHeight: '24px',
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
