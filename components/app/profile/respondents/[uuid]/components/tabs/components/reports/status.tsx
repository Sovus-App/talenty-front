import Link from 'next/link';
import { generateRespondentReportStatus } from '@/tools';
import { ArrowLinkPrimary } from '@/assets/icons';

import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';

interface ReportsStatusProps {
	status: string | 'purchased' | 'not_purchased' | 'ready_for_pass';
}

const ReportsStatus = ({ status }: ReportsStatusProps) => {
	const content = generateRespondentReportStatus(status, '12134');
	return (
		<div className={classes.respondent_card_reports_list_item_status}>
			<div className={classes.respondent_card_reports_list_item_status_content}>
				{content.icon}
				<div>
					<p>{content.title}</p>
					<Link href="/public">
						Посмотреть демо-отчет <ArrowLinkPrimary />
					</Link>
				</div>
				{content.button}
			</div>
		</div>
	);
};

export default ReportsStatus;
