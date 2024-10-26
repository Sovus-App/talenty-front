import classes from '@/assets/styles/components/list/list.module.scss';
import { PropsWithChildren } from 'react';
import Item from './item';

const List = (props: PropsWithChildren) => {
	return <ul className={classes.list}>{props.children}</ul>;
};

List.Item = Item;

export default List;
