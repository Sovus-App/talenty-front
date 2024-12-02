import ReportsListItem from './item';

import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';

const ReportsList = () => {
	const reports = [
		{
			report_status: 'purchased',
			survey_status: 'not_completed',
			survey_completed_at: null,
			title: 'Тип темперамента и нервной деятельности',
			description:
				'Предназначен для оценки преимущественного типа поведения личности',
		},
		{
			report_status: 'not_purchased',
			survey_status: 'not_completed',
			survey_completed_at: null,
			title: 'Эмоциональная стабильность и реактивность',
			description:
				'Предназначен для оценки преимущественного типа поведения личности',
		},
		{
			report_status: 'ready_for_pass',
			survey_status: 'not_completed',
			survey_completed_at: null,
			title: 'Мотивация и ценности',
			description:
				'Предназначен для оценки преимущественного типа поведения личности',
		},
	];
	return (
		<div className={classes.respondent_card_reports_container}>
			<div className={classes.respondent_card_reports_list}>
				{reports.map((report) => (
					<ReportsListItem
						report_status={report.report_status}
						key={report.title}
						survey_status={report.survey_status}
						survey_completed_at={report.survey_completed_at}
						title={report.title}
						description={report.description}
					/>
				))}
			</div>
		</div>
	);
};

export default ReportsList;
