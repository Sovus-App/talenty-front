import { TalentyIcon } from '@/assets/icons';
import { Grid2 as Grid } from '@mui/material';

import classes from '@/assets/styles/components/layout/layout.module.scss';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Header = () => {
	return (
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
	);
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<header className={classes.testing_layout}>
				<Header />
			</header>
			<main className={classes.testing_layout}>{children}</main>
		</>
	);
};

export default Layout;
