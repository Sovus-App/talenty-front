import { readFromLocalStorage } from '@/tools';

const CREATE_SURVEY_API_ROUTE = '/api/internal/pages/surveys';

async function createSurvey(formData: { respondent_uuid: string }) {
	const token = readFromLocalStorage('token');
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${CREATE_SURVEY_API_ROUTE}`,
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
		return data as { uuid: string };
	}
	return error;
}

export default createSurvey;
