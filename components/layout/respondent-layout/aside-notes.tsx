import classes from '@/assets/styles/components/layout/respondent_layout.module.scss';
import { Grid2 as Grid, TextField } from '@mui/material';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const AsideNotes = () => {
	return (
		<aside className={classes.respondent_layout_notes}>
			<Grid container>
				<h2>Заметки</h2>
				<TextField
					fullWidth
					sx={{
						[`.${outlinedInputClasses.root}`]: {
							padding: 0,
							background: 'rgba(0,0,0,.03)',
						},
						[`.${outlinedInputClasses.notchedOutline}`]: {
							border: 'none',
						},
					}}
					placeholder="Напишите заметку"
					multiline
					rows={3}
				/>
			</Grid>
		</aside>
	);
};

export default AsideNotes;
