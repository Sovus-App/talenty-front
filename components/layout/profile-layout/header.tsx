'use client';
import Link from 'next/link';
import classes from '@/assets/styles/components/layout/layout.module.scss';
import { TalentyIcon, SmileyIcon, RubIcon } from '@/assets/icons';
import { Button, Grid2 as Grid } from '@mui/material';
import { Dropdown } from '../../dropdown';
import { GetMeResponse, getMeFetcher, GET_ME_API_ROUTE } from '@/lib';
import { useRouter } from 'next/navigation';
import { deleteFromLocalStorage, readFromLocalStorage } from '@/tools';
import useSWR from 'swr';
import { Chip } from '@/components';

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
				className={[classes.navbar, classes.profile_header_container].join(' ')}
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
				<Grid component="li" className={classes.navbar_item_balance}>
					<Chip variant="filled" label={{ text: 2000, icon: <RubIcon /> }} />
				</Grid>
				<li className={classes.navbar_item_balance_refill}>
					<Button variant="outlined">Пополнить баланс</Button>
				</li>
				<li>
					<Dropdown
						label={userData?.data?.user?.email}
						toggle={{
							startIcon: <SmileyIcon />,
							sx: { background: 'rgba(0, 0, 0, 0.05)' },
						}}
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
