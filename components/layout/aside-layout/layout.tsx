import { ReactNode } from 'react';
import classes from '@/assets/styles/components/layout/aside_layout.module.scss';
import Aside from './aside';

interface LayoutProps {
	children: ReactNode;
	aside?: ReactNode;
	header?: ReactNode;
}

const Layout = ({ children, aside, header }: LayoutProps) => {
	return (
		<main className={classes.aside_layout}>
			{Boolean(header) && (
				<div className={classes.aside_layout_header}>{header}</div>
			)}
			<div className={classes.aside_layout_content}>
				<div className={classes.aside_layout_content_container}>{children}</div>
				{Boolean(aside) && <Aside>{aside}</Aside>}
			</div>
		</main>
	);
};

export default Layout;
