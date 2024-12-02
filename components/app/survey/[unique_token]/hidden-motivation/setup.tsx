import { memo } from 'react';

import classes from '@/assets/styles/app/survey/hidden-motivation.module.scss';
import { Grid2 as Grid } from '@mui/material';
import {
	HiddenMotivationColors,
	ConfiguredColors,
} from '@/lib/survey/hidden-motivation';

interface CardProps {
	colors: HiddenMotivationColors[];
	color: string;
	code: string;
	draftConfiguredColors?: ConfiguredColors;
	configuredLength: number;
	setDraftConfiguredColors: (color?: ConfiguredColors) => void;
}

const Card = ({
	colors,
	color,
	draftConfiguredColors,
	configuredLength,
	setDraftConfiguredColors,
	code,
}: CardProps) => {
	const isSelected = color === draftConfiguredColors?.color;
	const background = isSelected ? color + '70' : color;
	const onClick = () => {
		const order = colors.length - configuredLength;
		const updatedColor = {
			color,
			order,
			code,
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
	colors: HiddenMotivationColors[];
	configuredColors: ConfiguredColors[];
	setDraftConfiguredColors: (color?: ConfiguredColors) => void;
	draftConfiguredColors?: ConfiguredColors;
}

const Setup = ({
	colors,
	configuredColors,
	setDraftConfiguredColors,
	draftConfiguredColors,
}: SetupProps) => {
	const unConfiguredColors = colors.filter(
		(color_item) =>
			!configuredColors?.some(
				(selected_color_item) => selected_color_item.color === color_item.color,
			),
	);
	return (
		<div className={classes.container}>
			{unConfiguredColors.map((color_item) => (
				<Card
					colors={colors}
					key={color_item.color}
					color={color_item.color}
					code={color_item.code}
					draftConfiguredColors={draftConfiguredColors}
					setDraftConfiguredColors={setDraftConfiguredColors}
					configuredLength={configuredColors?.length}
				/>
			))}
		</div>
	);
};

export default memo(Setup);
