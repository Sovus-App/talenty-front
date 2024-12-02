import classes from '@/assets/styles/app/profile/finance/finance.module.scss';

import { Accordion } from '@/components';

interface HistoryItemProps {
	transaction: {
		id: number;
	};
	report: {
		name: string;
		description: string;
	};
}

const HistoryItem = ({ transaction, report }: HistoryItemProps) => {
	return (
		<Accordion title={`Транзакция №${transaction.id}`}>
			<div className={classes.finances_transactions_item}>
				<div className={classes.finances_transactions_item_header}>
					<p>{report.name}</p>
				</div>
			</div>
		</Accordion>
	);
};

export default HistoryItem;
