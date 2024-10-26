import Image from 'next/image';
import DemoGIF from '@/assets/gif/motivation-testing2.gif';
import { Grid2 as Grid } from '@mui/material';

const Introduce = () => (
	<Grid container flexDirection="column" gap="12px">
		<h1>Инструкция: часть 2</h1>
		<Image
			src={DemoGIF}
			alt="hidden motivation testing introduce part 2"
			height={500}
			width={400}
		/>
		<p>
			Нужно будет выбрать цвет, который ассоциируется с понятием вверху экрана
		</p>
	</Grid>
);

export default Introduce;
