'use client';

import { DefaultLayout } from '@/components';
import { Button, Grid2 as Grid } from '@mui/material';

export default function Error({
	_error,
	reset,
}: {
	_error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<DefaultLayout>
			<Grid container flexDirection="column" gap="24px">
				<h1>Что-то пошло не так!</h1>
				<Button size="large" onClick={() => reset()}>
					Попробовать снова
				</Button>
			</Grid>
		</DefaultLayout>
	);
}
