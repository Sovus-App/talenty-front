import classes from '@/assets/styles/components/layout/layout.module.scss';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return <main className={classes.profile_layout}>{children}</main>;
};

export default Layout;
