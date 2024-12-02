import { Button } from '@mui/material';

import classes from '@/assets/styles/app/survey/create.module.scss';

interface CreateSurveyAsideProps {
	respondent_email: string;
}

const Aside = ({ respondent_email }: CreateSurveyAsideProps) => {
	return (
		<div className={classes.create_survey_aside_content}>
			<div className={classes.create_survey_aside_content_title}>
				<h2>Пример письма</h2>
				<span>
					Будет отправлено на: <span>{respondent_email}</span>
				</span>
			</div>
			<div className={classes.create_survey_aside_content_example}>
				<p>
					Иван, вы&nbsp;получили это письмо так как вас выбрали в&nbsp;качестве
					звездочки на&nbsp;тестирование.
				</p>
				<p>Время на&nbsp;прохождение теста: 56&nbsp;минут</p>
				<p>Пожалуйста, пройдите наш тест.</p>
				<Button aria-readonly={true} variant="outlined" size="small" fullWidth>
					Пройти тест
				</Button>
			</div>
		</div>
	);
};

export default Aside;
