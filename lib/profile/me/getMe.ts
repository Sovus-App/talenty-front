import { deleteFromLocalStorage } from '@/tools';

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

export const getMe = async (token: string) => {
	if (/[^\u0000-\u00ff]/g.test(token)) {
		deleteFromLocalStorage('token');
		return;
	}
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${GET_ME_API_ROUTE}`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
	const { data, error } = await response.json();
	if (data) {
		return data.user as GetMeResponse;
	}
	return error;
};
