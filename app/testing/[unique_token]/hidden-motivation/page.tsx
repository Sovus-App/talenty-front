import type { Metadata } from 'next';
import { HiddenMotivationTestingContainer } from '@/components/app';

export const metadata: Metadata = {
	title: 'Скрытая мотивация',
};

export default async function Page() {
	const testingData = await Promise.resolve({ questions: [] });
	return <HiddenMotivationTestingContainer testingData={testingData} />;
}
