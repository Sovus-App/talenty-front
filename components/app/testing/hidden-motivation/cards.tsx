import classes from '@/assets/styles/components/app/testing/hidden-motivation.module.scss';
import { memo } from 'react';

function Cards({
	configuredColors,
	setDraftSelectedAnswer,
	draftSelectedAnswer,
	text,
}) {
	return (
		<div className={classes.cards}>
			<h1>{text || 'Foo'}</h1>
			<div className={classes.cards_container}>
				{configuredColors.map((configured_color) => {
					const isSelected =
						configured_color.color === draftSelectedAnswer?.color;
					const style = {
						background: isSelected
							? configured_color.color + '63'
							: configured_color.color,
						color: configured_color.color,
					};

					return (
						<div
							className={classes.cards_item}
							key={configured_color.color}
							style={style}
							onClick={() =>
								setDraftSelectedAnswer(
									isSelected ? undefined : configured_color,
								)
							}
						>
							<span>{isSelected ? 'Выбрано' : null}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default memo(Cards);
