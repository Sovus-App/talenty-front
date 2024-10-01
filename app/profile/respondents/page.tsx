import { getRespondents } from '@/lib';
import { RespondentsTable } from '@/components';
import classes from '@/assets/styles/app/respondents.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Респонденты',
};

export default async function Page() {
	const respondents = await getRespondents();

	return (
		<div className={classes.respondents}>
			<h1>Респонденты</h1>
			<RespondentsTable tableData={respondents} />
		</div>
	);
}
