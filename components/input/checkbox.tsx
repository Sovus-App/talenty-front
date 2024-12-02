import {
	Checkbox as MUICheckbox,
	CheckboxProps as MUICheckboxProps,
} from '@mui/material';
import { Checked, Unchecked } from '@/assets/icons';

const Checkbox = (props: MUICheckboxProps) => {
	return (
		<MUICheckbox {...props} icon={<Unchecked />} checkedIcon={<Checked />} />
	);
};

export default Checkbox;
