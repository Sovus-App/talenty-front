import Link from 'next/link';
import classes from '@/assets/styles/components/layout/layout.module.scss';
import { TalentyIcon, BellIcon, AvatarIcon } from '@/assets/icons';
import { Button, Grid2 as Grid } from '@mui/material';
import { Dropdown } from '../../dropdown';

const Header = () => {
	return (
		<Grid
			gap="0px 12px"
			container
			columns={7}
			component="ul"
			className={classes.navbar}
		>
			<li className={classes.navbar_item_logo}>
				<Link href={'/'}>
					<TalentyIcon />
				</Link>
			</li>
			<li>
				<Link href={'/profile/respondents'}>Респонденты</Link>
			</li>
			<Grid flexGrow={1} component="li">
				<Link href={'/profile/finance'}>Финансы</Link>
			</Grid>
			<li className={classes.navbar_item_balance}>
				<b>2000 ₽</b>
			</li>
			<Grid component="li" marginRight="40px">
				<Button variant="outlined" size="small">
					Пополнить
				</Button>
			</Grid>
			<li>
				<Dropdown id="notification" label={<BellIcon withBadge />}></Dropdown>
			</li>
			<li className={classes.navbar_item_user}>
				<Button color="inherit" size="small" startIcon={<AvatarIcon />}>
					aromanchev
				</Button>
			</li>
		</Grid>
	);
};

export default Header;
