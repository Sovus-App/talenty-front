'use client';

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
				<main>
					<h1>Что-то пошло не так!</h1>
					<button onClick={() => reset()}>Попробовать снова</button>
				</main>
			</body>
		</html>
	);
}
