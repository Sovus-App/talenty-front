import { Skeleton } from '@mui/material';
import { DefaultLayout } from '@/components';

export default function Loading() {
	return (
		<DefaultLayout>
			<Skeleton height="var(--layout-min-height)" variant="rectangular" />
		</DefaultLayout>
	);
}
