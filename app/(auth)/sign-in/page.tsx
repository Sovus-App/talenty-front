import type { Metadata } from 'next';
import { SignInForm } from '@/components';

export const metadata: Metadata = {
	title: 'Вход',
};

export default function SignIn() {
	return <SignInForm />;
}
