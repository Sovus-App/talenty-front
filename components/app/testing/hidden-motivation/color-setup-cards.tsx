import { memo } from 'react';

import { HIDDEN_MOTIVATION_TESTING_COLORS } from '@/lib';
import classes from '@/assets/styles/components/app/testing/hidden-motivation.module.scss';

function ColorSetupCards({
	configuredColors,
	setDraftConfiguredColors,
	draftConfiguredColors,
}) {
	const unConfiguredColors = HIDDEN_MOTIVATION_TESTING_COLORS.filter(
		(color_item) =>
			!configuredColors?.some(
				(selected_color_item) => selected_color_item.color === color_item.color,
			),
	);
	return (
		<div className={classes.cards}>
			<div className={classes.cards_container}>
				{unConfiguredColors.map((color_item) => {
					const isSelected = color_item.color === draftConfiguredColors?.color;
					const background = isSelected
						? color_item.color + '70'
						: color_item.color;

					return (
						<div
							className={classes.cards_item}
							key={color_item.color}
							style={{ background }}
							onClick={() => {
								const value =
									HIDDEN_MOTIVATION_TESTING_COLORS.length -
									configuredColors.length;

								const color = {
									...color_item,
									value,
								};
								setDraftConfiguredColors(isSelected ? undefined : color);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default memo(ColorSetupCards);
