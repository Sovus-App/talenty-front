import { readFromLocalStorage } from '@/tools';

interface CreateRespondentData {
	full_name: string;
	date_of_birth: string;
	phone: string;
	email: string;
	gender: 'male' | 'female' | string;
}

interface CreateRespondentResponses
	extends Omit<CreateRespondentData, 'date_of_birth'> {
	uuid: string;
	age: string;
}

const CREATE_RESPONDENT_API_ROUTE = '/api/internal/pages/respondents';

export async function createRespondent(data: CreateRespondentData) {
	const token = readFromLocalStorage('token');
	const response = await fetch(
		`${process.env.API_BASE_URL}/${CREATE_RESPONDENT_API_ROUTE}`,
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		},
	);
	const respondent: CreateRespondentResponses = await response.json();
	return respondent;
}
