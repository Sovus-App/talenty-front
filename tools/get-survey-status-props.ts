const getSurveyStatusProps = (
	survey_status: 'completed' | 'not_completed' | string,
) => {
	const props = {
		color: 'inherit',
		backgroundColor: 'transparent',
		label: '-',
	};
	if (survey_status === 'completed') {
		Object.assign(props, {
			color: '#027A48',
			backgroundColor: '#ECFDF3',
			label: 'Пройдено',
		});
	} else if (survey_status === 'not_completed') {
		Object.assign(props, {
			color: '#B42318',
			backgroundColor: '#FEF3F2',
			label: 'Не пройдено',
		});
	}
	return props;
};

export default getSurveyStatusProps;
