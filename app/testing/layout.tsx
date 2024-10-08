import { ReactNode } from 'react';

import { TestingLayout } from '@/components';

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return <TestingLayout>{children}</TestingLayout>;
}
