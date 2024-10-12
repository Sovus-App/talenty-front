import { ReactNode } from 'react';

import { ProfileHeader } from '@/components';

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<>
			<ProfileHeader />
			{children}
		</>
	);
}
