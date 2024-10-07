import { readFromLocalStorage } from '@/tools';

export interface GetRespondentsSchema {
	uuid: number;
	full_name: string;
	gender: 'male' | 'female' | string;
	age: string;
	testing_started_at: string;
	status: 'completed' | 'not_completed' | string;
}

const GET_RESPONDENT_API_ROUTE = '/api/internal/pages/respondents';

export async function getRespondents(params: string) {
	const token = readFromLocalStorage('token');
	const respondentsData = await fetch(
		`${process.env.API_BASE_URL}/${GET_RESPONDENT_API_ROUTE}?${params}`,
		{
			method: 'GET',
			cache: 'no-store',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
	return await respondentsData.json();
}
