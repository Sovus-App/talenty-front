import { PersonalityAssessmentSubmitted } from './types';

const PERSONALITY_ASSESSMENT_API_ROUTE = 'api/internal/respondent_testings';

export async function submitTesting({
	respondent_unique_token,
	personalityAssessmentTestingData,
}: {
	respondent_unique_token: string;
	personalityAssessmentTestingData: {
		answers: PersonalityAssessmentSubmitted[];
	};
}): Promise<{ data: Record<string, unknown>; error: { message: string } }> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${PERSONALITY_ASSESSMENT_API_ROUTE}/${respondent_unique_token}/personality_assessment/submit`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(personalityAssessmentTestingData),
		},
	);
	return await response.json();
}
