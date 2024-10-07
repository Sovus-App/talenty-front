export interface GetTransactionsSchema {
	id: number;
	type: 'WITHDRAWAL' | 'REFILL' | string;
	date: string;
	price: number;
}

export async function getTransactions() {
	return Promise.resolve(
		[...new Array(5)].map((_, index) => ({
			id: index,
			type: index % 2 === 0 ? 'REFILL' : 'WITHDRAWAL',
			date: '01.02.2023',
			price: 1000 * 2,
		})),
	);
}
