import type { Metadata } from 'next';
import { Button, Grid2 as Grid } from '@mui/material';
import { FinanceTable, ProfileLayout } from '@/components';
import { getTransactions } from '@/lib';

import classes from '@/assets/styles/app/finance.module.scss';

export const metadata: Metadata = {
	title: 'Финансы',
};

export default async function Page() {
	const transactions = await getTransactions();
	const totalBalance = transactions.reduce((acc, transaction) => {
		acc += transaction.price;
		return acc;
	}, 0);
	return (
		<ProfileLayout>
			<Grid className={classes.finances}>
				<Grid
					className={classes.finances_balance}
					justifyContent="space-between"
					container
				>
					<Grid>
						<h1>{totalBalance} ₽</h1>
						<span>Остаток средств на счете</span>
					</Grid>
					<Button size="small" variant="contained">
						Пополнить баланс
					</Button>
				</Grid>
				<Grid className={classes.finances_transactions}>
					<h2>История транзакций</h2>
					<FinanceTable tableData={transactions} />
				</Grid>
			</Grid>
		</ProfileLayout>
	);
}
