import classes from '@/assets/styles/components/list/list.module.scss';
import { PropsWithChildren } from 'react';

const Item = (props: PropsWithChildren) => {
	return <li className={classes.list_item}>{props.children}</li>;
};

export default Item;
