import type { Metadata } from 'next';
import { getTesting } from '@/lib';
import { PersonalityAssessmentTestingContainer } from '@/components';

export const metadata: Metadata = {
	title: 'Оценка личности',
};

export default async function Page({
	params,
}: {
	params: { unique_token: string };
}) {
	const testingData = await getTesting(params.unique_token);
	return (
		<PersonalityAssessmentTestingContainer
			testingData={{
				...testingData.personality_assessment_testing,
				survey: testingData.survey,
			}}
		/>
	);
}
