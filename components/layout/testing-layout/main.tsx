import { PropsWithChildren } from 'react';
import classes from '@/assets/styles/components/layout/layout.module.scss';

const Main = ({ children }: PropsWithChildren) => (
	<main className={classes.testing_layout}>{children}</main>
);

export default Main;
