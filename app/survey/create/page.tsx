import type { Metadata } from 'next';
import {
	AsideLayout,
	CreateSurveyContainer,
	ProfileHeader,
} from '@/components';

export const metadata: Metadata = {
	title: 'Новое тестирование',
};

export default async function Page() {
	return (
		<>
			<ProfileHeader />
			<AsideLayout>
				<CreateSurveyContainer />
			</AsideLayout>
		</>
	);
}
