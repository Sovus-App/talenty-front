import Link from 'next/link';
import classes from '@/assets/styles/components/layout/layout.module.scss';
import { TalentyIcon } from '@/assets/icons';
import { Grid2 as Grid } from '@mui/material';

const Header = () => {
	return (
		<header className={classes.default_header}>
			<Grid
				container
				justifyContent="center"
				component="ul"
				className={classes.navbar}
			>
				<Grid component="li" marginBottom="24px">
					<Link href={'/'}>
						<TalentyIcon />
					</Link>
				</Grid>
			</Grid>
		</header>
	);
};

export default Header;
