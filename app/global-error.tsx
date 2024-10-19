'use client';

import { ErrorLayout } from '@/components';

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
				<ErrorLayout>
					<h1>Что-то пошло не так!</h1>
					<button onClick={() => reset()}>Попробовать снова</button>
				</ErrorLayout>
			</body>
		</html>
	);
}
