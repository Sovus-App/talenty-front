import { Skeleton } from '@mui/material';
import { DefaultLayout } from '@/components';

export default function Loading() {
	return (
		<DefaultLayout>
			<Skeleton height="var(--layout-lg-min-height)" variant="rectangular" />
		</DefaultLayout>
	);
}
