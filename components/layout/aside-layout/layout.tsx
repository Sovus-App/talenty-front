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
			<div className={classes.aside_layout_content}>
				<div className={classes.aside_layout_content_container}>{children}</div>
				{Boolean(aside) && <Aside>{aside}</Aside>}
			</div>
		</main>
	);
};

export default Layout;
