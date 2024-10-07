import {
	inputBaseClasses,
	inputLabelClasses,
	TextField,
	TextFieldProps,
} from '@mui/material';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const AuthInput = (props: Omit<TextFieldProps, 'variant'>) => {
	return (
		<TextField
			{...props}
			variant="outlined"
			size="medium"
			fullWidth
			required
			sx={{
				[`.${inputLabelClasses.root}`]: {
					lineHeight: '20px',
					fontSize: '15px',
					top: '-5px',
					letterSpacing: '2px',
				},
				[`.${outlinedInputClasses.root}`]: {
					[`.${outlinedInputClasses.notchedOutline}`]: {
						borderRadius: '12px',
						border: '2px solid #D1D7DB',
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
