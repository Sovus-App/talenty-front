import { SurveyResponse } from './types';

const TESTING_API_ROUTE = '/api/internal/respondent_testings/';

async function getSurvey(respondent_unique_token: string) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${TESTING_API_ROUTE}/${respondent_unique_token}/`,
		{
			method: 'GET',
		},
	);
	const { data, error } = await response.json();
	if (data) {
		return data as SurveyResponse;
	}
	return error;
}

export default getSurvey;
