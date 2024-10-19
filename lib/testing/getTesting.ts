import { TestingResponse } from './types';

const TESTING_API_ROUTE = '/api/internal/respondent_testings/';

async function getTesting(respondent_unique_token: string) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${TESTING_API_ROUTE}/${respondent_unique_token}/`,
		{
			method: 'GET',
		},
	);
	const { data, error } = await response.json();
	if (data) {
		return data as TestingResponse;
	}
	return error;
}

export default getTesting;
