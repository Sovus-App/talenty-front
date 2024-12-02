import { MUIComponentsType } from './';

const muiForm: MUIComponentsType = {
	MuiFormHelperText: {
		styleOverrides: {
			root: {
				margin: 0,
			},
		},
	},
	MuiFormControlLabel: {
		styleOverrides: {
			root: {
				width: '100%',
				marginLeft: 0,
			},
		},
	},
	MuiFormLabel: {
		styleOverrides: {
			asterisk: {
				color: 'var(--error-color)',
			},
		},
	},
};

export default muiForm;
