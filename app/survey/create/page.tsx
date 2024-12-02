import type { Metadata } from 'next';
import { CreateSurveyContainer } from '@/components';

export const metadata: Metadata = {
	title: 'Новое тестирование',
};

export default async function Page() {
	return <CreateSurveyContainer />;
}
