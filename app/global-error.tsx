'use client';

import { DefaultLayout } from '@/components';

export default function GlobalError({
	_error,
	reset,
}: {
	_error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body>
				<DefaultLayout>
					<h1>Что-то пошло не так!</h1>
					<button onClick={() => reset()}>Попробовать снова</button>
				</DefaultLayout>
			</body>
		</html>
	);
}
