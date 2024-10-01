import { FormControl, TextField, TextFieldProps } from '@mui/material';

interface CreateRespondentInputProps extends Omit<TextFieldProps, 'label'> {
	id: string;
	label: string;
}

const CreateRespondentInput = ({
	id,
	label,
	...props
}: CreateRespondentInputProps) => {
	return (
		<FormControl sx={{ '& label': { marginBottom: '8px', fontSize: '14px' } }}>
			<label htmlFor={id}>{label}</label>
			<TextField {...props} id={id} size="small" />
		</FormControl>
	);
};

export default CreateRespondentInput;