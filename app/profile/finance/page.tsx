import type { Metadata } from 'next';
import { AsideLayout } from '@/components';

import { FinanceContainer } from '@/components/app';

export const metadata: Metadata = {
	title: 'Финансы',
};

export default function Page() {
	return (
		<AsideLayout>
			<FinanceContainer />
		</AsideLayout>
	);
}
