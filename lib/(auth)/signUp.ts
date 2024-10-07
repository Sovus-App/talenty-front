import { writeToLocalStorage } from '@/tools';

export interface SignUpData {
	email: string;
	password: string;
	full_name: string;
	phone: string;
	approve_policy: boolean;
}

export interface SignUpResponse {
	email: string;
	access_token: string;
}

const SIGN_IN_API_ROUTE = '/api/internal/sign-up';

export async function signUp(data: SignUpData) {
	const response = await fetch(
		`${process.env.API_BASE_URL}/${SIGN_IN_API_ROUTE}`,
		{
			method: 'POST',
			body: JSON.stringify({ user: data }),
		},
	);
	const credentials: { data: SignUpResponse } = await response.json();
	writeToLocalStorage('token', credentials.data.access_token);
}
