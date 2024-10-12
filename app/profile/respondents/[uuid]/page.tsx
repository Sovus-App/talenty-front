import type { Metadata } from 'next';
import { RespondentLayout, RespondentCard } from '@/components';

export const metadata: Metadata = {
	title: 'Страница респондента',
};

export default function Page() {
	return (
		<RespondentLayout>
			<RespondentCard />
		</RespondentLayout>
	);
}
