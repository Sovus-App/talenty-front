'use client';

import { List } from '@/components';
import { Button } from '@mui/material';
import { ChangeEvent, useState } from 'react';

import classes from '@/assets/styles/app/survey/create.module.scss';
import CreateSurveyListItem from '@/components/app/survey/create/list/item';

const CreateSurveyList = () => {
	const [selectedSurveys, setSelectedSurveys] = useState<string[]>([]);
	const handleChange = (
		event: ChangeEvent<HTMLInputElement>,
		survey: string,
	) => {
		const checked = event.target.checked;
		if (checked && !selectedSurveys.includes(survey)) {
			setSelectedSurveys([...selectedSurveys, survey]);
		} else {
			setSelectedSurveys(
				selectedSurveys.filter((selectedSurvey) => selectedSurvey !== survey),
			);
		}
	};
	return (
		<div className={classes.create_survey_list}>
			<div className={classes.create_survey_list_content}>
				<List>
					<CreateSurveyListItem
						onChange={(event) => handleChange(event, 'survey_1')}
						survey_status="Тест не отправлялся"
						survey_name="«Твой любимый цвет»"
					/>
					<CreateSurveyListItem
						onChange={(event) => handleChange(event, 'survey_2')}
						survey_status="Тест не отправлялся"
						survey_name="«Подходит не подходит»"
					/>
				</List>
			</div>
			<div className={classes.create_survey_list_button}>
				<Button variant="outlined">Отправить</Button>
			</div>
		</div>
	);
};

export default CreateSurveyList;
