import type { Metadata } from 'next';
import { HiddenMotivationTestingContainer } from '@/components/app';

export const metadata: Metadata = {
	title: 'Респонденты',
};

export default async function Page() {
	return (
		<div>
			<HiddenMotivationTestingContainer />
		</div>
	);
}
