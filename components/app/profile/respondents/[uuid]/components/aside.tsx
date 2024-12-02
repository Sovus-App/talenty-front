import { Button, Grid2 as Grid, Skeleton, TextField } from '@mui/material';

import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';

const Aside = ({ loading }: { loading: boolean }) => {
	return (
		<div className={classes.respondent_card_aside}>
			{loading ? (
				<Skeleton variant="rectangular" height={200} />
			) : (
				<Grid container flexDirection="column" gap="16px">
					<TextField
						fullWidth
						placeholder="Напишите комментарий"
						multiline
						minRows={4}
						maxRows={4}
					/>
					<Grid flexGrow=".5">
						<Button fullWidth variant="outlined">
							Добавить заметку
						</Button>
					</Grid>
				</Grid>
			)}
		</div>
	);
};

export default Aside;
