import { writeToLocalStorage } from '@/tools';

export interface SignInData {
	email: string;
	password: string;
}

export interface SignInResponse {
	email: string;
	access_token: string;
}

const SIGN_IN_API_ROUTE = '/api/internal/sign-in';

export async function signIn(data: SignInData) {
	const response = await fetch(
		`${process.env.API_BASE_URL}/${SIGN_IN_API_ROUTE}`,
		{
			method: 'POST',
			body: JSON.stringify({ user: data }),
		},
	);
	const credentials: { data: SignInResponse } = await response.json();
	writeToLocalStorage('token', credentials.data.access_token);
}
