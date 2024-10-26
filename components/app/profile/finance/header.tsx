import classes from '@/assets/styles/app/finance.module.scss';
import { Button } from '@mui/material';

const Header = () => {
	return (
		<div className={classes.finances_header}>
			<div className={classes.finances_header_content}>
				<h1>2000 ₽</h1>
				<p>Остаток средств на счете</p>
			</div>
			<Button variant="contained" size="medium">
				Пополнить баланс
			</Button>
		</div>
	);
};

export default Header;
