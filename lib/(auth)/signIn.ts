import { writeToLocalStorage } from '@/tools';

export interface SignInData {
	email: string;
	password: string;
}

export interface SignInResponse {
	email: string;
	access_token: string;
}

const SIGN_IN_API_ROUTE = 'api/internal/sign-in';

export async function signIn(formData: SignInData) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${SIGN_IN_API_ROUTE}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({ user: formData }),
		},
	);
	const { data: credentials, error } = await response.json();
	if (credentials) {
		writeToLocalStorage('token', credentials.access_token);
		return credentials;
	}
	return error;
}
