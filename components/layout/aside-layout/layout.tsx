import { ReactNode } from 'react';
import classes from '@/assets/styles/components/layout/aside_layout.module.scss';
import Aside from './aside';

interface LayoutProps {
	children: ReactNode;
	aside?: ReactNode;
}

const Layout = ({ children, aside }: LayoutProps) => {
	return (
		<main className={classes.aside_layout}>
			<div className={classes.aside_layout_container}>{children}</div>
			{aside ? <Aside>{aside}</Aside> : null}
		</main>
	);
};

export default Layout;
