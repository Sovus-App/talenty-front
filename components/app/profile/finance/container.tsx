import classes from '@/assets/styles/components/app/profile/finance/finance.module.scss';

import TransactionsHistory from './history';
import Header from './header';

const FinanceContainer = () => {
	return (
		<div className={classes.finances}>
			<Header />
			<TransactionsHistory />
		</div>
	);
};

export default FinanceContainer;
