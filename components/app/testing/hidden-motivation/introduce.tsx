import Image from 'next/image';
import DemoGIF from '@/assets/gif/motivation-testing2.gif';

const Introduce = () => (
	<>
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
	</>
);

export default Introduce;
