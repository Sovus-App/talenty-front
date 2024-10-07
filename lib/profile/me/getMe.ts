import { readFromLocalStorage } from '@/tools';

const GET_ME_API_ROUTE = '/api/internal/me';

export interface GetMeResponse {
	user: {
		phone: string;
		full_name: string;
		uuid: string;
		email: string;
	};
}

export const getMe = async () => {
	const token = readFromLocalStorage('token');
	const response = await fetch(
		`${process.env.API_BASE_URL}/${GET_ME_API_ROUTE}`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
	const user: { data: GetMeResponse } = await response.json();
	return user.data;
};
