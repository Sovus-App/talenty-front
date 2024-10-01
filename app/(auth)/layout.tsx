import { ReactNode } from 'react';

import { AuthLayout } from '@/components';

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return <AuthLayout>{children}</AuthLayout>;
}
