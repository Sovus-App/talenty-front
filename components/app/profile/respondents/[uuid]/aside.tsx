import { Button, Grid2 as Grid, TextField } from '@mui/material';

import classes from '@/assets/styles/app/respondents.module.scss';

const Aside = () => {
	return (
		<div className={classes.respondent_card_aside}>
			<Grid container flexDirection="column" gap="16px">
				<TextField
					fullWidth
					placeholder="Напишите комментарий"
					multiline
					minRows={4}
					maxRows={4}
				/>
				<Grid flexGrow=".5">
					<Button variant="outlined">Добавить заметку</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Aside;
