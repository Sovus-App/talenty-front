import BuyReport from './buy-report';
import ReportsList from './list';

import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';

const Reports = () => {
	return (
		<div className={classes.respondent_card_reports}>
			<BuyReport />
			<ReportsList />
		</div>
	);
};

export default Reports;
