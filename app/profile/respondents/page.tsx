import { ProfileLayout, RespondentsTable } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Респонденты',
};

export default async function Page() {
	return (
		<ProfileLayout title="Респонденты">
			<RespondentsTable />
		</ProfileLayout>
	);
}
