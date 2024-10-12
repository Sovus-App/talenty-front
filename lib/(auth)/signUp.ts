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

const SIGN_IN_API_ROUTE = 'api/internal/sign-up';

export async function signUp(formData: SignUpData) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/${SIGN_IN_API_ROUTE}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
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
