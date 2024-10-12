export const GET_ME_API_ROUTE = 'api/internal/me';

export interface GetMeResponse {
	phone: string;
	full_name: string;
	uuid: string;
	email: string;
}

export const getMeFetcher = (url: string, token: string | null | boolean) =>
	fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then((response) => response.json());
