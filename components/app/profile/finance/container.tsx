import classes from '@/assets/styles/app/finance.module.scss';

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
