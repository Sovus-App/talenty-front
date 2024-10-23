import type { Metadata } from 'next';
import { HiddenMotivationTestingContainer } from '@/components';
import { getTesting } from '@/lib';
import { TestingLayout } from '@/components';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Скрытая мотивация',
};

export default async function Page({
	params,
}: {
	params: { unique_token: string };
}) {
	const testingData = await getTesting(params.unique_token);
	return (
		<TestingLayout>
			{testingData.hidden_motivation_testing ? (
				<HiddenMotivationTestingContainer
					testingData={testingData.hidden_motivation_testing}
				/>
			) : (
				notFound()
			)}
		</TestingLayout>
	);
}
