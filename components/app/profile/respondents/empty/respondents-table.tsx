import Link from 'next/link';
import { Button } from '@mui/material';
import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';

const EmptyRespondentsTable = () => {
	return (
		<div className={classes.empty_respondents_table}>
			<h1>Пока ничего нет, создайте респондента</h1>
			<Button variant="contained" size="medium">
				<Link href={'/profile/respondents/create'}>Создать респондента</Link>
			</Button>
		</div>
	);
};

export default EmptyRespondentsTable;
