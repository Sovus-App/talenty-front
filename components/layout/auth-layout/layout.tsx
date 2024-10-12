import { ReactNode } from 'react';
import Header from './header';
import classes from '@/assets/styles/components/layout/layout.module.scss';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<main className={classes.auth_layout}>{children}</main>
		</>
	);
};

export default Layout;
