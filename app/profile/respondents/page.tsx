import { getRespondents } from '@/lib';
import { RespondentsTable } from '@/components';
import classes from '@/assets/styles/app/respondents.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Респонденты',
};

export default async function Page({
	searchParams,
}: {
	searchParams: { current_page: string; per_page: string; sort: string };
}) {
	const queryParams = [
		searchParams.current_page,
		searchParams.per_page,
		searchParams.sort,
	]
		.filter(Boolean)
		.join('&');
	const respondents = await getRespondents(queryParams);

	return (
		<div className={classes.respondents}>
			<h1>Респонденты</h1>
			<RespondentsTable tableData={respondents} />
		</div>
	);
}
