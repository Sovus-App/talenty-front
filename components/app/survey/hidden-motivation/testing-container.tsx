'use client';
import { useCallback } from 'react';
import { HiddenMotivationTesting } from '@/lib/survey/hidden-motivation';
import { useHiddenMotivation, useHiddenMotivationSetup } from '@/lib';

import { Button as MUIButton, ButtonProps, Grid2 as Grid } from '@mui/material';
import SetupIntroduce from './setup-introduce';
import Introduce from './introduce';
import Testing from './testing';
import Setup from './setup';

import classes from '@/assets/styles/components/app/testing/hidden-motivation.module.scss';
import { TestingLayout } from '@/components';

const TestingButton = (props: ButtonProps) => (
	<MUIButton {...props} variant="contained" size="large" fullWidth />
);

const TestingContainer = ({
	testingData,
	onFinishSurvey,
}: {
	testingData: HiddenMotivationTesting;
	onFinishSurvey: () => void;
}) => {
	const {
		buttonProps: setupButtonProps,
		draftConfiguredColors,
		setDraftConfiguredColors,
		configuredColors,
		isSetupPassed,
		isSetupIntroducePassed,
	} = useHiddenMotivationSetup({ colors: testingData.colors });
	const {
		buttonProps: testingButtonProps,
		draftSelectedAnswer,
		currentQuestion,
		setDraftSelectedAnswer,
		isIntroducePassed,
	} = useHiddenMotivation({ testingData, configuredColors, onFinishSurvey });
	const Button = useCallback(() => {
		if (!isSetupPassed) {
			return <TestingButton {...setupButtonProps} />;
		}
		return <TestingButton {...testingButtonProps} />;
	}, [isSetupPassed, setupButtonProps, testingButtonProps]);
	const Layout = useCallback(() => {
		if (!isSetupIntroducePassed) {
			return <SetupIntroduce />;
		}
		if (!isSetupPassed) {
			return (
				<Setup
					colors={testingData.colors}
					draftConfiguredColors={draftConfiguredColors}
					configuredColors={configuredColors}
					setDraftConfiguredColors={setDraftConfiguredColors}
				/>
			);
		}
		if (!isIntroducePassed) {
			return <Introduce />;
		}
		return (
			<Testing
				text={currentQuestion?.text}
				draftSelectedAnswer={draftSelectedAnswer}
				setDraftSelectedAnswer={setDraftSelectedAnswer}
				configuredColors={configuredColors}
			/>
		);
	}, [
		currentQuestion,
		draftSelectedAnswer,
		draftConfiguredColors,
		configuredColors,
		isIntroducePassed,
		isSetupPassed,
		isSetupIntroducePassed,
	]);
	return (
		<TestingLayout>
			<Grid container className={classes.container} flexDirection="column">
				<Grid className={classes.container_layout}>
					<Layout />
				</Grid>
				<Grid>
					<Button />
				</Grid>
			</Grid>
		</TestingLayout>
	);
};

export default TestingContainer;
