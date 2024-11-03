import moment, { Moment } from 'moment';

import { FormControl } from '@mui/material';
import {
	DatePicker as MUIDatePicker,
	DatePickerProps,
	pickersCalendarHeaderClasses,
	pickersDayClasses,
} from '@mui/x-date-pickers';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { Asterisk } from '@/components/input';

interface CreateRespondentDatepickerProps
	extends Omit<DatePickerProps<Moment>, 'label'> {
	id: string;
	label: string;
	size?: 'small' | 'medium';
	required?: boolean;
	helperText?: string;
	error?: boolean;
}

const DatePicker = ({
	id,
	label,
	size = 'small',
	helperText,
	error,
	...props
}: CreateRespondentDatepickerProps) => {
	const maxYear = moment().get('year') - 18;

	return (
		<FormControl
			sx={{
				'& label': { marginBottom: '8px', fontSize: '14px' },
			}}
		>
			<label htmlFor={id}>
				{label} {props.required ? <Asterisk /> : null}
			</label>
			<MUIDatePicker
				{...props}
				sx={{
					svg: {
						width: 16,
						height: 16,
					},
					[`.${outlinedInputClasses.input}`]: {
						padding:
							size === 'small' ? '8px 12px !important' : '12px 16px !important',
					},
				}}
				maxDate={moment(`${maxYear}-12-31`)}
				slotProps={{
					textField: {
						helperText,
						error,
					},
					layout: {
						sx: {
							[`.${pickersDayClasses.selected}`]: {
								color: '#ffffff !important',
							},
							[`.${pickersCalendarHeaderClasses.label}`]: {
								textTransform: 'capitalize',
							},
						},
					},
				}}
				closeOnSelect
			/>
		</FormControl>
	);
};

export default DatePicker;
