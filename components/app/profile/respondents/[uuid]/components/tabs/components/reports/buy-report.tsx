import { Button } from '@mui/material';
import { Chip } from '@/components';
import { RubIcon } from '@/assets/icons';

import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';

const BuyReport = () => {
	return (
		<div className={classes.respondent_card_reports_container}>
			<div className={classes.respondent_card_reports_buy_report}>
				<p>
					Вы&nbsp;можете приобрести все отчёты пакетно и&nbsp;за&nbsp;одну
					транзакцию
				</p>
				<Button size="medium" variant="outlined">
					Купить все отчёты
					<Chip
						size="small"
						variant="filled"
						label={{ text: 6000, icon: <RubIcon /> }}
					/>
				</Button>
			</div>
		</div>
	);
};

export default BuyReport;
