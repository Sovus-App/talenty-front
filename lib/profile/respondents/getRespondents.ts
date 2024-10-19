export const GET_RESPONDENT_API_ROUTE = 'api/internal/pages/respondents';

export const getRespondentsFetcher = (
	url: string,
	token: string | null | boolean,
) =>
	fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then((response) => response.json());

export const getRespondentFetcher = (
	url: string,
	token: string | null | boolean,
) =>
	fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then((response) => response.json());
