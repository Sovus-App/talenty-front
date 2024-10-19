import classes from '@/assets/styles/app/not-found.module.scss';
import { Grid2 as Grid } from '@mui/material';
import Link from 'next/link';
import { ErrorLayout } from '@/components';

export default async function NotFound() {
	return (
		<ErrorLayout>
			<Grid gap="48px" container className={classes.notFound}>
				<Grid>
					<h1>Страница не найдена!</h1>
				</Grid>
				<Link className={classes.notFound__redirect_link} href="/">
					Вернуться на главную
				</Link>
			</Grid>
		</ErrorLayout>
	);
}
