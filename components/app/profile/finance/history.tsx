import classes from '@/assets/styles/app/finance.module.scss';
import { Button } from '@mui/material';
import { Accordion } from '@/components';

const TransactionsHistory = () => {
	return (
		<div className={classes.finances_transactions}>
			<div className={classes.finances_transactions_header}>
				<h2>История транзакций</h2>
				<Button size="medium" variant="secondary">
					Скачать все отчеты
				</Button>
			</div>
			<div>
				<Accordion id="foo" title="Транзакция № 4757685954">
					Fooo
				</Accordion>
				<Accordion id="bar" title="Транзакция № 4757685953">
					Fooo
				</Accordion>
				<Accordion id="kek" title="Транзакция № 4757685952">
					Fooo
				</Accordion>
			</div>
		</div>
	);
};

export default TransactionsHistory;
