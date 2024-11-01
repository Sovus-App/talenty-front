import classes from '@/assets/styles/components/app/survey/create.module.scss';
import { CreateSurveyHeader } from '../header';

const Container = () => {
	return (
		<div className={classes.create_survey}>
			<CreateSurveyHeader />
		</div>
	);
};

export default Container;
