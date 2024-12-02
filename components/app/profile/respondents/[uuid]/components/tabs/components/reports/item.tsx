import moment from 'moment';
import { Chip } from '@/components';
import getSurveyStatusProps from '@/tools/get-survey-status-props';

import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';
import ReportsStatus from './status';

interface ReportsListItemProps {
	survey_status: 'completed' | 'not_completed' | string;
	survey_completed_at: Date | null;
	title: string;
	description: string;
	report_status: 'purchased' | 'not_purchased' | 'ready_for_pass' | string;
}

const ReportsListItem = ({
	survey_status,
	survey_completed_at,
	title,
	description,
	report_status,
}: ReportsListItemProps) => {
	const surveyStatusProps = getSurveyStatusProps(survey_status);
	return (
		<div className={classes.respondent_card_reports_list_item}>
			<div className={classes.respondent_card_reports_list_item_title}>
				<div className={classes.respondent_card_reports_list_item_title_chips}>
					<Chip {...surveyStatusProps} size="small" rounded />
					{survey_completed_at && (
						<Chip
							variant="secondary"
							rounded
							size="small"
							label={{ text: moment(survey_completed_at).format('DD.MM.YYYY') }}
						/>
					)}
				</div>

				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<ReportsStatus status={report_status} />
		</div>
	);
};

export default ReportsListItem;
