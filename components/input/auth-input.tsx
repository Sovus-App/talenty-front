import {
	inputBaseClasses,
	inputLabelClasses,
	TextField,
	TextFieldProps,
} from '@mui/material';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { ReactNode } from 'react';

export interface AuthInputProps extends Omit<TextFieldProps, 'variant'> {}

const AuthInput = (props: AuthInputProps): ReactNode => {
	return (
		<TextField
			{...props}
			variant="outlined"
			size="medium"
			fullWidth
			required
			slotProps={{ inputLabel: { shrink: true } }}
			sx={{
				[`.${inputLabelClasses.root}`]: {
					lineHeight: '20px',
					fontSize: '15px',
					top: '-5px',
				},
				[`.${outlinedInputClasses.root}`]: {
					[`.${outlinedInputClasses.notchedOutline}`]: {
						borderRadius: '12px',
						borderColor: '#D1D7DB',
						borderWidth: '2px',
						'& legend span': {
							padding: 0,
							fontSize: '13px',
						},
					},
				},

				[`.${inputBaseClasses.root}`]: {
					color: '#1E1E1E',
					fontSize: '15px',
					lineHeight: '20px',
				},
				[`.${inputBaseClasses.input}`]: {
					height: 'max-content',
				},
			}}
		/>
	);
};

export default AuthInput;
