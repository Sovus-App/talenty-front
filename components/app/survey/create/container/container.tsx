import classes from '@/assets/styles/components/app/survey/create.module.scss';
import { CreateSurveyHeader } from '../header';
import { CreateSurveyAction } from '../action';

const Container = () => {
	return (
		<div className={classes.create_survey}>
			<CreateSurveyHeader />
			<CreateSurveyAction />
		</div>
	);
};

export default Container;
