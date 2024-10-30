import classes from '@/assets/styles/components/layout/layout.module.scss';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
	title: ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
	return (
		<main className={classes.profile_layout}>
			<h1>{title}</h1>
			<div className={classes.profile_layout_content}>{children}</div>
		</main>
	);
};

export default Layout;
