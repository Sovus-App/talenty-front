'use client';
import { useCallback, useState } from 'react';
import { HIDDEN_MOTIVATION_TESTING_COLORS } from '@/lib/testing/hidden-motivation';

export interface ConfiguredColors {
	color: string;
	value: number;
}

const useHiddenMotivationSetup = () => {
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
				const last_color = HIDDEN_MOTIVATION_TESTING_COLORS.find(
					(color_item) => !configured_colors.includes(color_item.color),
				);
				updatedConfiguredColors = [
					...updatedConfiguredColors,
					{ ...last_color, value: 1 } as ConfiguredColors,
				].sort(() => 0.5 - Math.random());
				setIsSetupPassed(!isSetupPassed);
			}
			setConfiguredColors(updatedConfiguredColors);
			setDraftConfiguredColors(undefined);
		}
	}, [
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
