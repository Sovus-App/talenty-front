import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { Inter } from 'next/font/google';
import { Layout } from '@/components';
import AppProviders from '@/providers';
import '../assets/styles/globals.css';

const inter = Inter({
	subsets: ['cyrillic'],
	weight: ['300', '400', '500', '700'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: {
		template: 'Talenty | %s',
		default: 'Talenty | Добро пожаловать!',
	},
	applicationName: 'Talenty',
	description: 'Talenty description',
	authors: { name: 'Talenty team' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={inter.variable}>
				<AppProviders>
					<Layout>{children}</Layout>
				</AppProviders>
			</body>
		</html>
	);
}
