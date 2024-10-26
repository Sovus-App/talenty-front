import type { Metadata } from 'next';
import { RespondentCard } from '@/components';

export const metadata: Metadata = {
	title: 'Страница респондента',
};

export default function Page() {
	return <RespondentCard />;
}
