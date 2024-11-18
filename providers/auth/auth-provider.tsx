'use client';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { deleteFromLocalStorage, readFromLocalStorage } from '@/tools';
import { usePathname, useRouter } from 'next/navigation';
import { Skeleton } from '@mui/material';
import { DefaultLayout } from '@/components';
import { getMe } from '@/lib/profile/me/getMe';
import { useSnackbar } from 'notistack';

function AuthProvider({ children }: { children: ReactNode }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const token = readFromLocalStorage('token');
	const router = useRouter();
	const pathname = usePathname();
	const isPrivateRoute = pathname.includes('profile');
	const isAuthRoute =
		pathname.includes('sign-in') || pathname.includes('sign-up');

	const checkAuth = useCallback(async () => {
		if (token) {
			const user = await getMe(token);
			if (user?.uuid) {
				setIsAuthenticated(true);
			} else if (user?.message) {
				enqueueSnackbar(user?.message);
				deleteFromLocalStorage('token');
				setIsAuthenticated(false);
			}
		}
	}, [token]);

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	useEffect(() => {
		if (token && isAuthenticated && isAuthRoute) {
			router.push('/profile/respondents');
		}
	}, [token, isAuthenticated, isAuthRoute]);

	useEffect(() => {
		if (!token && !isAuthenticated && isPrivateRoute) {
			router.push('/sign-up');
		}
	}, [token, isAuthenticated, isPrivateRoute]);

	return !isAuthenticated && isPrivateRoute ? (
		<DefaultLayout>
			<Skeleton height="var(--layout-min-height)" variant="rectangular" />
		</DefaultLayout>
	) : (
		children
	);
}

export default AuthProvider;
