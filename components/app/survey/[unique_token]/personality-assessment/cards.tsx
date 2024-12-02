import { PersonalityAssessmentAnswer } from '@/lib/survey/personality-assessment';

import classes from '@/assets/styles/app/survey/personality-assessment.module.scss';

interface CardsProps {
	onClick: (code: string, type: 'positive' | 'negative') => void;
	answers: PersonalityAssessmentAnswer[];
}

const Cards = ({ onClick, answers }: CardsProps) => {
	return (
		<div>
			{answers.map((answer) => {
				const negativeClasses = [
					classes.card_negative,
					answer.value === -1 && classes.card_negative_selected,
				]
					.filter(Boolean)
					.join(' ');
				const positiveClasses = [
					classes.card_positive,
					answer.value === 1 && classes.card_positive_selected,
				]
					.filter(Boolean)
					.join(' ');
				return (
					<div key={answer.code} className={classes.card}>
						<div
							className={negativeClasses}
							onClick={() => onClick(answer.code, 'negative')}
						/>
						<span>{answer.text}</span>
						<div
							className={positiveClasses}
							onClick={() => onClick(answer.code, 'positive')}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
