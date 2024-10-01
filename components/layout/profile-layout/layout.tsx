import Header from './header';
import classes from '@/assets/styles/components/layout/layout.module.scss';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<header className={classes.profile_layout}>
				<Header />
			</header>
			<main className={classes.profile_layout}>{children}</main>
		</>
	);
};

export default Layout;
