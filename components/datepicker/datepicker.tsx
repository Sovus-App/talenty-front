import { FormControl } from '@mui/material';
import {
	DatePicker as MUIDatePicker,
	DatePickerProps,
	pickersCalendarHeaderClasses,
	pickersDayClasses,
} from '@mui/x-date-pickers';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import moment, { Moment } from 'moment';

interface CreateRespondentDatepickerProps
	extends Omit<DatePickerProps<Moment>, 'label'> {
	id: string;
	label: string;
}

const DatePicker = ({
	id,
	label,
	...props
}: CreateRespondentDatepickerProps) => {
	const maxYear = moment().get('year') - 18;
	return (
		<FormControl
			sx={{
				'& label': { marginBottom: '8px', fontSize: '14px' },
			}}
		>
			<label htmlFor={id}>{label}</label>
			<MUIDatePicker
				{...props}
				sx={{
					svg: {
						width: 16,
						height: 16,
					},
					[`.${outlinedInputClasses.input}`]: {
						padding: '4px 12px !important',
					},
				}}
				maxDate={moment(`${maxYear}-12-31`)}
				slotProps={{
					layout: {
						sx: {
							[`.${pickersDayClasses.selected}`]: {
								color: '#ffffff',
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
