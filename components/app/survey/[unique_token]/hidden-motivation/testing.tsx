import classes from '@/assets/styles/components/app/survey/hidden-motivation.module.scss';
import { memo } from 'react';
import { ConfiguredColors } from '@/lib/survey/hidden-motivation';
import { Grid2 as Grid } from '@mui/material';

interface CardProps {
	configured_color: ConfiguredColors;
	draftSelectedAnswer?: ConfiguredColors;
	setDraftSelectedAnswer: (color?: ConfiguredColors) => void;
}

const Card = ({
	configured_color,
	draftSelectedAnswer,
	setDraftSelectedAnswer,
}: CardProps) => {
	const { color } = configured_color;
	const isSelected = color === draftSelectedAnswer?.color;
	const style = {
		background: isSelected ? color + '63' : color,
		color,
	};
	const onClick = () => {
		setDraftSelectedAnswer(isSelected ? undefined : configured_color);
	};

	return (
		<Grid className={classes.container_card} sx={style} onClick={onClick}>
			<span>{isSelected ? 'Выбрано' : null}</span>
		</Grid>
	);
};

interface TestingProps {
	configuredColors: ConfiguredColors[];
	setDraftSelectedAnswer: (color?: ConfiguredColors) => void;
	draftSelectedAnswer?: ConfiguredColors;
	text?: string;
}

const Testing = ({
	configuredColors,
	setDraftSelectedAnswer,
	draftSelectedAnswer,
	text,
}: TestingProps) => {
	return (
		<Grid textAlign="center">
			<h1>{text}</h1>
			<div className={classes.container}>
				{configuredColors.map((configured_color) => (
					<Card
						key={configured_color.color}
						configured_color={configured_color}
						draftSelectedAnswer={draftSelectedAnswer}
						setDraftSelectedAnswer={setDraftSelectedAnswer}
					/>
				))}
			</div>
		</Grid>
	);
};

export default memo(Testing);
