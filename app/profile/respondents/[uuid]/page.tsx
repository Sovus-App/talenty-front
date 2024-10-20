import type { Metadata } from 'next';
import { AsideLayout, RespondentCard } from '@/components';

export const metadata: Metadata = {
	title: 'Страница респондента',
};

export default function Page() {
	return (
		<AsideLayout>
			<RespondentCard />
		</AsideLayout>
	);
}
