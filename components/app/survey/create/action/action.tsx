'use client';

import classes from '@/assets/styles/components/app/survey/create.module.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@mui/material';
import { createSurvey } from '@/lib/survey';
import { useSnackbar } from 'notistack';

const Action = () => {
	const { enqueueSnackbar } = useSnackbar();
	const search = useSearchParams();
	const router = useRouter();
	const respondentId = search.get('respondent_uuid') || '';
	const onToggleCreate = () => {
		if (respondentId) {
			router.push(`/profile/respondents/${respondentId}`);
		} else {
			router.push('/profile/respondents');
		}
	};
	const onCreateSurvey = async () => {
		const data = { respondent_uuid: respondentId || '' };
		const survey = await createSurvey(data);
		if (survey?.uuid) {
			onToggleCreate();
		} else {
			enqueueSnackbar(survey?.message, { variant: 'error' });
		}
	};
	return (
		<div className={classes.create_survey_info}>
			<div className={classes.create_survey_info_title}>
				<h2>Создание тестирования</h2>
				<p>
					Перед созданием отчета проверьте данные. Респондент получит письмо
					с&nbsp;ссылкой на&nbsp;тестирование на&nbsp;указанную в&nbsp;его
					профиле почту
				</p>
			</div>
			<div className={classes.create_survey_info_description}>
				<p>
					Время на прохождение: <b>56 минут</b>
				</p>
			</div>
			<div className={classes.create_survey_info_buttons}>
				<Button onClick={onCreateSurvey} variant="contained">
					Создать тестирование
				</Button>
				<Button onClick={onToggleCreate} variant="secondary">
					Отменить
				</Button>
			</div>
		</div>
	);
};

export default Action;
