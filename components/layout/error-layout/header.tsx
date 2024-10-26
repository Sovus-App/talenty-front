import classes from '@/assets/styles/components/layout/layout.module.scss';
import { TalentyIcon } from '@/assets/icons';
import { Grid2 as Grid } from '@mui/material';

const Header = () => {
	return (
		<header className={classes.error_header}>
			<Grid
				container
				justifyContent="center"
				component="ul"
				className={classes.navbar}
			>
				<Grid component="li" marginBottom="24px">
					<TalentyIcon />
				</Grid>
			</Grid>
		</header>
	);
};

export default Header;
