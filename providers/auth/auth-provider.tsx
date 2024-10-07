'use client';
import { ReactNode, useEffect } from 'react';
import { readFromLocalStorage } from '@/tools';
import { usePathname, useRouter } from 'next/navigation';
import { Skeleton } from '@mui/material';
import { DefaultLayout } from '@/components';

function AuthProvider({ children }: { children: ReactNode }) {
	const token = readFromLocalStorage('token');
	const router = useRouter();
	const pathname = usePathname();
	const isPrivateRoute = pathname.includes('profile');

	useEffect(() => {
		if (!token && isPrivateRoute) {
			router.push('/sign-up');
		}
	}, [token, isPrivateRoute]);

	return !token && isPrivateRoute ? (
		<DefaultLayout>
			<Skeleton height="var(--layout-lg-min-height)" variant="rectangular" />
		</DefaultLayout>
	) : (
		children
	);
}

export default AuthProvider;
