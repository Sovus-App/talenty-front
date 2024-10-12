import classes from '@/assets/styles/app/respondents.module.scss';
import { CreateRespondentForm, ProfileLayout } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Создание респондента',
};

export default function Page() {
	return (
		<ProfileLayout>
			<div className={classes.create_respondent}>
				<h1>Создание респондента</h1>
				<CreateRespondentForm />
			</div>
		</ProfileLayout>
	);
}
