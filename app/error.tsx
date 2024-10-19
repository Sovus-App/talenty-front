'use client';

import { ErrorLayout } from '@/components';
import { Button, Grid2 as Grid } from '@mui/material';

export default function Error({
	_error,
	reset,
}: {
	_error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<ErrorLayout>
			<Grid container flexDirection="column" gap="24px">
				<h1>Что-то пошло не так!</h1>
				<Button variant="contained" size="large" onClick={() => reset()}>
					Попробовать снова
				</Button>
			</Grid>
		</ErrorLayout>
	);
}
