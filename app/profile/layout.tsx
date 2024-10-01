import { ReactNode } from 'react';

import { ProfileLayout } from '@/components';

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return <ProfileLayout>{children}</ProfileLayout>;
}
