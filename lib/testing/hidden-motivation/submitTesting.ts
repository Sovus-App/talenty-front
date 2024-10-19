import { HiddenMotivationSubmit } from './types';

const HIDDEN_MOTIVATION_API_ROUTE = '/api/internal/respondents_testing';

export async function submitTesting({
	respondent_unique_token,
	hiddenMotivationTestingData,
}: {
	respondent_unique_token: string;
	hiddenMotivationTestingData: HiddenMotivationSubmit;
}) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${HIDDEN_MOTIVATION_API_ROUTE}/${respondent_unique_token}/hidden_motivation/submit`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data: hiddenMotivationTestingData }),
		},
	);
	return await response.json();
}
