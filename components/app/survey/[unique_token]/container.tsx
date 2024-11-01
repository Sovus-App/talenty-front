'use client';

import { useState } from 'react';
import { SurveyResponse, SurveyTypes } from '@/lib/survey/types';

import Passed from './passed';
import { HiddenMotivationTestingContainer } from './hidden-motivation';
import { PersonalityAssessmentTestingContainer } from './personality-assessment';
import { notFound } from 'next/navigation';

const surveys = [
	SurveyTypes.HIDDEN_MOTIVATION,
	SurveyTypes.PERSONALITY_ASSESSMENT,
];

interface SurveyContainerProps {
	surveyData: SurveyResponse;
}

const SurveysContainer = ({ surveyData }: SurveyContainerProps) => {
	const [passedSurveys, setPassedSurveys] = useState<typeof surveys>([]);
	if (
		surveyData.survey.status === 'completed' ||
		surveys.every((survey) => passedSurveys.includes(survey))
	) {
		return <Passed />;
	}
	if (
		surveyData.personality_assessment_testing?.questions?.length &&
		!passedSurveys.includes(SurveyTypes.PERSONALITY_ASSESSMENT)
	) {
		return (
			<PersonalityAssessmentTestingContainer
				onFinishSurvey={() =>
					setPassedSurveys([
						...passedSurveys,
						SurveyTypes.PERSONALITY_ASSESSMENT,
					])
				}
				testingData={{
					...surveyData.personality_assessment_testing,
					survey: surveyData.survey,
				}}
			/>
		);
	}
	if (
		surveyData.hidden_motivation_testing?.questions?.length &&
		!passedSurveys.includes(SurveyTypes.HIDDEN_MOTIVATION)
	) {
		return (
			<HiddenMotivationTestingContainer
				testingData={surveyData.hidden_motivation_testing}
				onFinishSurvey={() =>
					setPassedSurveys([...passedSurveys, SurveyTypes.HIDDEN_MOTIVATION])
				}
			/>
		);
	}
	return notFound();
};

export default SurveysContainer;
