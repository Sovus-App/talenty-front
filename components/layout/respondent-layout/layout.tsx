import { ReactNode } from 'react';
import classes from '@/assets/styles/components/layout/respondent_layout.module.scss';
import AsideNotes from '@/components/layout/respondent-layout/aside-notes';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main className={classes.respondent_layout}>
			<div className={classes.respondent_layout_container}>{children}</div>
			<AsideNotes />
		</main>
	);
};

export default Layout;
