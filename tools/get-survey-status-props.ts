import { ChipProps } from '@/components/chip/chip';
import { OverridableStringUnion } from '@mui/types';

const getSurveyStatusProps = (
	survey_status: 'completed' | 'not_completed' | string,
): ChipProps => {
	const props: {
		label: { text: string };
		variant: OverridableStringUnion<'filled' | 'outlined'>;
	} = {
		label: {
			text: '–',
		},
		variant: 'outlined',
	};
	if (survey_status === 'completed') {
		Object.assign(props, {
			label: { text: 'Пройдено' },
			variant: 'success',
		});
	} else if (survey_status === 'not_completed') {
		Object.assign(props, {
			label: { text: 'Не пройдено' },
			variant: 'error',
		});
	}
	return props;
};

export default getSurveyStatusProps;
