import { readFromLocalStorage } from '@/tools';
import { CreateRespondentData, CreateRespondentResponse } from './types';

const CREATE_RESPONDENT_API_ROUTE = '/api/internal/pages/respondents';

export async function createRespondent(formData: CreateRespondentData) {
	const token = readFromLocalStorage('token');
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${CREATE_RESPONDENT_API_ROUTE}`,
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data: formData }),
		},
	);
	const { data, error } = await response.json();
	if (data) {
		return data as CreateRespondentResponse;
	}
	return error;
}
