import { TestingLayout } from '@/components';

export default async function Page() {
	return (
		<TestingLayout>
			<h1>Тестирование пройдено!</h1>
			<p>Отчет по тестированию будет отправлен на почту!</p>
		</TestingLayout>
	);
}
