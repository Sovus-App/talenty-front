import { Grid2 as Grid } from '@mui/material';
import { TestingLayout } from '@/components';

const Passed = () => {
	return (
		<TestingLayout>
			<Grid container gap="16px">
				<h1>Тестирование пройдено!</h1>
				<p>Отчет по тестированию будет отправлен на почту!</p>
			</Grid>
		</TestingLayout>
	);
};

export default Passed;
