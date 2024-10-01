import Link from 'next/link';
import classes from '@/assets/styles/components/layout/layout.module.scss';
import { TalentyIcon } from '@/assets/icons';
import { Grid2 as Grid } from '@mui/material';

const Header = () => {
	return (
		<Grid
			container
			justifyContent="center"
			component="ul"
			className={classes.navbar}
		>
			<Grid component="li" marginBottom="80px">
				<Link href={'/'}>
					<TalentyIcon />
				</Link>
			</Grid>
		</Grid>
	);
};

export default Header;
