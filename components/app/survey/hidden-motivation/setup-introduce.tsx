import Image from 'next/image';
import DemoGIF from '@/assets/gif/motivation-testing.gif';
import { Grid2 as Grid } from '@mui/material';

const SetupIntroduce = () => (
	<Grid container flexDirection="column" gap="12px">
		<h1>Инструкция: часть 1</h1>
		<Image
			src={DemoGIF}
			alt="hidden motivation testing introduce part 1"
			height={455}
			width={400}
		/>
		<p>Необходимо будет выбирать наиболее приятный вам цвет из имеющихся</p>
		<p>После выбора мы уберем этот цвет и выбирать надо будет из оставшихся</p>
		<p>
			<b>Время не ограничено</b>
		</p>
	</Grid>
);

export default SetupIntroduce;
