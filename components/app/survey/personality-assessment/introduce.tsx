import Image from 'next/image';
import IntroduceGif from '@/assets/gif/personality-testing-introduce.gif';

const Introduce = () => (
	<>
		<h1>Инструкция</h1>
		<Image
			loading="lazy"
			src={IntroduceGif}
			alt="personality testing introduce"
			height={285}
			width={385}
		/>
		<p>
			Выбирайте слева характеристику которая вам
			<b style={{ color: '#44BE85' }}> наиболее подходит</b>
		</p>
		<p>
			Справа выбираете{' '}
			<b style={{ color: '#FD5557' }}>наименее подходящую вам</b> характеристику
		</p>
		<ul>
			<li>Будет по 30 секунд на выбор</li>
			<li>Если не успели ответить - все в порядке</li>
			<li>
				Эта часть теста займет не более <b>7 минут</b>
			</li>
			<li>
				Все тестирование займет <b>15 минут</b>
			</li>
		</ul>
	</>
);

export default Introduce;
