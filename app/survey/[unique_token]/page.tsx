import type { Metadata } from 'next';
import { getSurvey } from '@/lib';
import { SurveysContainer } from '@/components';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Прохождение тестирование',
};

export default async function Page({
	params,
}: {
	params: { unique_token: string };
}) {
	const surveyData = await getSurvey(params.unique_token);
	if (
		!surveyData?.survey &&
		!surveyData?.personality_assessment_testing?.questions.length &&
		!surveyData?.hidden_motivation_testing?.questions.length
	) {
		return notFound();
	}
	return <SurveysContainer surveyData={surveyData} />;
}
