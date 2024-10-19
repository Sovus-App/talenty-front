'use client';

import { useCallback, useState } from 'react';
import {
	ConfiguredColors,
	HiddenMotivationColors,
} from '../hidden-motivation/types';

const useHiddenMotivationSetup = ({
	colors,
}: {
	colors: HiddenMotivationColors[];
}) => {
	const [isSetupIntroducePassed, setIsSetupIntroducePassed] = useState(false);
	const [isSetupPassed, setIsSetupPassed] = useState(false);
	const [draftConfiguredColors, setDraftConfiguredColors] =
		useState<ConfiguredColors>();
	const [configuredColors, setConfiguredColors] = useState<ConfiguredColors[]>(
		[],
	);

	const onClick = useCallback(() => {
		if (!isSetupIntroducePassed) {
			setIsSetupIntroducePassed(!isSetupIntroducePassed);
		}
		if (!isSetupPassed && draftConfiguredColors) {
			let updatedConfiguredColors = [
				...configuredColors,
				draftConfiguredColors,
			];
			if (updatedConfiguredColors.length === 7) {
				const configured_colors = updatedConfiguredColors.map(
					(color_item) => color_item.color,
				);
				const last_color = colors.find(
					(color_item) => !configured_colors.includes(color_item.color),
				);
				updatedConfiguredColors = [
					...updatedConfiguredColors,
					{ ...last_color, order: 1 } as ConfiguredColors,
				].sort(() => 0.5 - Math.random());
				setIsSetupPassed(!isSetupPassed);
			}
			setConfiguredColors(updatedConfiguredColors);
			setDraftConfiguredColors(undefined);
		}
	}, [
		colors,
		configuredColors,
		draftConfiguredColors,
		isSetupIntroducePassed,
		isSetupPassed,
	]);

	const buttonProps = {
		disabled: isSetupIntroducePassed ? !draftConfiguredColors : false,
		onClick,
		children: !isSetupIntroducePassed ? 'Продолжить прохождение' : 'Далее',
	};

	return {
		buttonProps,
		isSetupPassed,
		configuredColors,
		draftConfiguredColors,
		isSetupIntroducePassed,
		setDraftConfiguredColors,
	};
};

export default useHiddenMotivationSetup;
