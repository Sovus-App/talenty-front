import { Table } from '@/components';

import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';

const OrderHistory = () => {
	return (
		<div className={classes.respondent_card_order_history}>
			<Table data={[]} columns={[]} />
		</div>
	);
};

export default OrderHistory;
