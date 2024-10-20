'use client';
import { useCallback } from 'react';
import { usePersonalityAssessment } from '@/lib';
import { PersonalityAssessmentTesting } from '@/lib/testing/personality-assessment';

import { Button, Grid2 as Grid } from '@mui/material';
import {
	TestingHeaderWithTimer,
	TestingHeader,
	TestingMain,
} from '../../../layout/testing-layout';
import Introduce from './introduce';
import Testing from './testing';

import classes from '@/assets/styles/components/app/testing/personality-assessment.module.scss';
import { Survey } from '@/lib/testing/types';

interface PersonalityAssessmentContainerProps {
	testingData: PersonalityAssessmentTesting & { survey: Survey };
}

const TestingContainer = ({
	testingData,
}: PersonalityAssessmentContainerProps) => {
	const {
		navigationButtonProps,
		currentQuestionAnswers,
		handleAnswerSelect,
		timerProps,
		isIntroducePassed,
	} = usePersonalityAssessment({ testingData });

	const Layout = useCallback(() => {
		if (!isIntroducePassed) {
			return <Introduce />;
		}
		return (
			<Testing onClick={handleAnswerSelect} answers={currentQuestionAnswers} />
		);
	}, [isIntroducePassed, handleAnswerSelect, currentQuestionAnswers]);

	return (
		<>
			{isIntroducePassed ? (
				<TestingHeaderWithTimer {...timerProps} />
			) : (
				<TestingHeader />
			)}
			<TestingMain>
				<Grid container className={classes.container} flexDirection="column">
					<Grid className={classes.container_layout}>
						<Layout />
					</Grid>
					<Grid>
						<Button
							{...navigationButtonProps}
							variant="contained"
							size="large"
							fullWidth
						/>
					</Grid>
				</Grid>
			</TestingMain>
		</>
	);
};

export default TestingContainer;
