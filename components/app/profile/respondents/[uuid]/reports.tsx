'use client';
import { List } from '@/components';
import { Button, Grid2 as Grid } from '@mui/material';

import classes from '@/assets/styles/components/app/profile/respondents/respondents.module.scss';

const Reports = () => {
	return (
		<div className={classes.respondent_card_reports}>
			<Grid
				container
				justifyContent="space-between"
				marginBottom="16px"
				alignItems="center"
			>
				<h2>Доступные отчеты</h2>
				<Button variant="secondary">Купить отчет</Button>
			</Grid>
			<List>
				<List.Item>
					<Grid container>Отчет 1</Grid>
				</List.Item>
				<List.Item>
					<Grid container>Отчет 2</Grid>
				</List.Item>
				<List.Item>
					<Grid container>Отчет 3</Grid>
				</List.Item>
			</List>
		</div>
	);
};

export default Reports;
