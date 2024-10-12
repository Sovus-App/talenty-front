import { memo } from 'react';

import {
	ConfiguredColors,
	HIDDEN_MOTIVATION_TESTING_COLORS,
} from '@/lib/testing/hidden-motivation';
import classes from '@/assets/styles/components/app/testing/hidden-motivation.module.scss';
import { Grid2 as Grid } from '@mui/material';

interface CardProps {
	color: string;
	draftConfiguredColors?: ConfiguredColors;
	configuredLength: number;
	setDraftConfiguredColors: (color?: ConfiguredColors) => void;
}

const Card = ({
	color,
	draftConfiguredColors,
	configuredLength,
	setDraftConfiguredColors,
}: CardProps) => {
	const isSelected = color === draftConfiguredColors?.color;
	const background = isSelected ? color + '70' : color;
	const onClick = () => {
		const value = HIDDEN_MOTIVATION_TESTING_COLORS.length - configuredLength;
		const updatedColor = {
			color,
			value,
		};
		isSelected && Object.assign(updatedColor, undefined);

		setDraftConfiguredColors(updatedColor);
	};
	return (
		<Grid
			className={classes.container_card}
			sx={{ background }}
			onClick={onClick}
		/>
	);
};

interface SetupProps {
	configuredColors: ConfiguredColors[];
	setDraftConfiguredColors: (color?: ConfiguredColors) => void;
	draftConfiguredColors?: ConfiguredColors;
}

const Setup = ({
	configuredColors,
	setDraftConfiguredColors,
	draftConfiguredColors,
}: SetupProps) => {
	const unConfiguredColors = HIDDEN_MOTIVATION_TESTING_COLORS.filter(
		(color_item) =>
			!configuredColors?.some(
				(selected_color_item) => selected_color_item.color === color_item.color,
			),
	);
	return (
		<div className={classes.container}>
			{unConfiguredColors.map((color_item) => (
				<Card
					key={color_item.color}
					color={color_item.color}
					draftConfiguredColors={draftConfiguredColors}
					setDraftConfiguredColors={setDraftConfiguredColors}
					configuredLength={configuredColors?.length}
				/>
			))}
		</div>
	);
};

export default memo(Setup);
