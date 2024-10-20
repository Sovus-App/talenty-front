import { PropsWithChildren } from 'react';
import classes from '@/assets/styles/components/layout/aside_layout.module.scss';

const Aside = ({ children }: PropsWithChildren) => {
	return (
		<aside className={classes.aside_layout_aside_content}>{children}</aside>
	);
};

export default Aside;
