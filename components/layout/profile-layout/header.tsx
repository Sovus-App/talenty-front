'use client';
import Link from 'next/link';
import classes from '@/assets/styles/components/layout/layout.module.scss';
import { TalentyIcon, BellIcon, AvatarIcon } from '@/assets/icons';
import { Button, Grid2 as Grid } from '@mui/material';
import { Dropdown } from '../../dropdown';
import { GetMeResponse, getMeFetcher, GET_ME_API_ROUTE } from '@/lib';
import { useRouter } from 'next/navigation';
import { deleteFromLocalStorage, readFromLocalStorage } from '@/tools';
import useSWR from 'swr';

const Header = () => {
	const router = useRouter();
	const token = readFromLocalStorage('token');
	const { data: userData } = useSWR<{ data: { user: GetMeResponse } }>(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${GET_ME_API_ROUTE}`,
		(key: string) => getMeFetcher(key, token),
	);

	const logout = () => {
		deleteFromLocalStorage('token');
		router.push('/sign-in');
	};

	return (
		<header className={classes.profile_header}>
			<Grid
				gap="0px 12px"
				container
				columns={7}
				component="ul"
				className={classes.navbar}
			>
				<li className={classes.navbar_item_logo}>
					<Link href={'/profile/respondents'}>
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
					<Dropdown
						label={userData?.data?.user?.email}
						toggle={{ startIcon: <AvatarIcon /> }}
						id="user-profile-dropdown"
					>
						<Button onClick={() => logout()}>Выход</Button>
					</Dropdown>
				</li>
			</Grid>
		</header>
	);
};

export default Header;
