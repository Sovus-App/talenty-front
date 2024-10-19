import { Grid2 as Grid } from '@mui/material';
import classes from '@/assets/styles/components/layout/layout.module.scss';
import { TalentyIcon } from '@/assets/icons';

const Header = () => {
	return (
		<header className={classes.testing_layout}>
			<Grid
				container
				justifyContent="center"
				component="ul"
				className={classes.navbar}
			>
				<Grid component="li">
					<TalentyIcon />
				</Grid>
			</Grid>
		</header>
	);
};

export default Header;
