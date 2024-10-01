import type { Metadata } from 'next';
import { SignUpForm } from '@/components';

export const metadata: Metadata = {
	title: 'Регистрация',
};

export default function SignUp() {
	return <SignUpForm />;
}
