'use client';
import { Table } from '@/components/table';
import { Chip } from '@mui/material';
import { GetTransactionsSchema } from '@/lib';

interface FinanceTableProps {
	tableData: GetTransactionsSchema[];
}

const columns = [
	{
		field: 'type',
		sx: { width: '10%' },
		render: (row: GetTransactionsSchema) => {
			const transaction = {
				color: 'inherit',
				borderColor: 'transparent',
				label: '',
			};
			if (row.type === 'REFILL') {
				Object.assign(transaction, {
					label: 'Пополнение',
					color: '#00995A',
					borderColor: '#7FF9C6',
				});
			} else if (row.type === 'WITHDRAWAL') {
				Object.assign(transaction, {
					label: 'Списание',
					color: '#EB0000',
					borderColor: '#FFE5E5',
				});
			}
			return (
				<Chip
					component="div"
					label={transaction.label}
					sx={{
						color: transaction.color,
						border: `1px solid ${transaction.borderColor}`,
						background: '#ffffff',
					}}
				/>
			);
		},
	},
	{
		field: 'date',
		sx: { width: '75%' },
	},
	{
		field: 'price',
		sx: { width: '15%', textAlign: 'right' },
		render: (row: GetTransactionsSchema) => {
			return <b>{row.price}₽</b>;
		},
	},
];

const FinanceTable = ({ tableData }: FinanceTableProps) => {
	return (
		<Table<GetTransactionsSchema>
			hideHead
			withPagination={false}
			data={tableData}
			columns={columns}
		/>
	);
};

export default FinanceTable;
