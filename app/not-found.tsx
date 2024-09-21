import classes from '@/assets/styles/app/not-found.module.scss';
import { Grid2 as Grid } from '@mui/material';
import Link from 'next/link';

export default async function NotFound() {
	return (
		<Grid container className={classes.notFound}>
			<h1>Страница не найдена!</h1>
			<Link className={classes.notFound__redirect_link} href="/">
				Вернуться на главную
			</Link>
		</Grid>
	);
}