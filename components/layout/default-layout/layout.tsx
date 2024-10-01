import classes from '@/assets/styles/components/layout/layout.module.scss';
import { ReactNode } from 'react';
import Header from './header';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<header className={classes.default_layout}>
				<Header />
			</header>
			<main className={classes.default_layout}>{children}</main>
		</>
	);
};

export default Layout;
