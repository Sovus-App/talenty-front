'use client';
import Link from 'next/link';
import classes from '@/assets/styles/components/layout/layout.module.scss';
import { TalentyIcon } from '@/assets/icons';
import { Grid2 as Grid } from '@mui/material';
import { usePathname } from 'next/navigation';

const Header = () => {
	const pathname = usePathname();
	const isSignIn = pathname.includes('sign-in');
	return (
		<header className={classes.auth_layout}>
			<Grid
				container
				justifyContent="space-between"
				component="ul"
				className={classes.navbar}
			>
				<Grid component="li">
					<Link href={'/'}>
						<TalentyIcon />
					</Link>
				</Grid>
				<Grid component="li">
					<Link href={isSignIn ? '/sign-up' : '/sign-in'}>
						{isSignIn ? 'Регистрация' : 'Вход'}
					</Link>
				</Grid>
			</Grid>
		</header>
	);
};

export default Header;
