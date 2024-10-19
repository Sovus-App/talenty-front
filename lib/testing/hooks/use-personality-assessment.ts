'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
	PersonalityAssessmentAnswer,
	PersonalityAssessmentSubmitted,
	PersonalityAssessmentTesting,
	submitTesting,
} from '../personality-assessment';
import { useParams, useRouter } from 'next/navigation';
import { ButtonProps } from '@mui/material';
import { Survey } from '@/lib/testing/types';
import { useSnackbar } from 'notistack';

const DEFAULT_TIMER_COUNT = 30;

const usePersonalityAssessment = ({
	testingData,
}: {
	testingData: PersonalityAssessmentTesting & { survey: Survey };
}) => {
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();
	const [timerCount, setTimerCount] = useState(DEFAULT_TIMER_COUNT);
	const params = useParams();
	const [isIntroducePassed, setIsIntroducePassed] = useState(false);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState<
		PersonalityAssessmentAnswer[]
	>(
		testingData.questions[questionIndex]?.map((question) => ({
			...question,
			value: 0,
		})),
	);
	const [submittedAnswers, setSubmittedAnswers] = useState<
		PersonalityAssessmentSubmitted[]
	>([]);

	const timerProgress = useMemo(() => {
		const percent = Math.abs(100 / 30);
		return Math.round(percent * timerCount);
	}, [timerCount]);

	const isLastQuestion = useMemo(
		() => questionIndex === testingData.questions.length - 1,
		[questionIndex, testingData],
	);

	const navigationButtonText = useMemo(() => {
		return !isIntroducePassed ? 'Начать прохождение' : 'Далее';
	}, [isIntroducePassed]);

	const isNavigationButtonDisabled = useMemo(() => {
		if (!isIntroducePassed) {
			return false;
		}
		return (
			currentQuestionAnswers.filter(
				(answer) => answer.value === 1 || answer.value === -1,
			).length !== 2
		);
	}, [currentQuestionAnswers, isIntroducePassed]);

	const onQuestionChange = useCallback(
		async (selected_answers: PersonalityAssessmentAnswer[]) => {
			const updatedSubmittedAnswers = [
				...submittedAnswers,
				{
					items: selected_answers.map(({ code, value }) => ({ code, value })),
					time_to_response: DEFAULT_TIMER_COUNT - timerCount,
				},
			];
			setSubmittedAnswers(updatedSubmittedAnswers);
			if (!isLastQuestion) {
				setTimerCount(30);
				const updatedQuestionIndex = questionIndex + 1;
				setQuestionIndex(updatedQuestionIndex);
				setCurrentQuestionAnswers(
					testingData.questions[updatedQuestionIndex].map((question) => ({
						...question,
						value: 0,
					})),
				);
			} else {
				const response = await submitTesting({
					respondent_unique_token: params?.unique_token as string,
					personalityAssessmentTestingData: {
						answers: updatedSubmittedAnswers,
					},
				});
				if (response?.data) {
					if (
						testingData.survey.kind ===
						'personality_assessment_and_hidden_motivation'
					) {
						router.push(
							`/testing/${params?.unique_token as string}/hidden_motivation`,
						);
					}
				} else if (response?.error?.message) {
					enqueueSnackbar(response.error.message, { variant: 'error' });
				}
			}
		},
		[
			timerCount,
			testingData,
			questionIndex,
			isLastQuestion,
			submittedAnswers,
			params?.unique_token,
		],
	);
	const handleAnswerSelect = useCallback(
		(code: string, type: 'positive' | 'negative') => {
			const selectedAnswersUpdated = currentQuestionAnswers.map(
				(selected_answer) => {
					if (selected_answer.code === code) {
						return {
							...selected_answer,
							value: type === 'negative' ? -1 : 1,
						};
					}
					if (
						(type === 'negative' && selected_answer.value !== 1) ||
						(type === 'positive' && selected_answer.value !== -1)
					) {
						return {
							...selected_answer,
							value: 0,
						};
					}
					return selected_answer;
				},
			);

			setCurrentQuestionAnswers(selectedAnswersUpdated);
		},
		[currentQuestionAnswers],
	);

	const onTimeOut = useCallback(() => {
		testingData.questions.push(
			currentQuestionAnswers.map((answer) => ({ ...answer, value: 0 })),
		);
		setTimerCount(30);
		const updatedQuestionIndex = questionIndex + 1;
		setQuestionIndex(updatedQuestionIndex);
		setCurrentQuestionAnswers(
			testingData.questions[updatedQuestionIndex].map((question) => ({
				...question,
				value: 0,
			})),
		);
	}, [testingData.questions, questionIndex, currentQuestionAnswers]);

	const onNavigationButtonClick = useCallback(() => {
		if (!isIntroducePassed) {
			setIsIntroducePassed(!isIntroducePassed);
		} else {
			onQuestionChange(currentQuestionAnswers);
		}
	}, [onQuestionChange, currentQuestionAnswers, isIntroducePassed]);

	useEffect(() => {
		if (timerCount === 0) {
			onTimeOut();
		}
		if (isIntroducePassed) {
			const timer =
				timerCount > 0
					? setInterval(() => setTimerCount(timerCount - 1), 1000)
					: 0;
			return () => clearInterval(timer);
		}
	}, [timerCount, isIntroducePassed]);

	const navigationButtonProps: ButtonProps = {
		children: navigationButtonText,
		onClick: onNavigationButtonClick,
		disabled: isNavigationButtonDisabled,
	};

	const timerProps = {
		timerProgress,
		timerCount,
	};

	return {
		navigationButtonProps,
		currentQuestionAnswers,
		handleAnswerSelect,
		isIntroducePassed,
		timerProps,
	};
};

export default usePersonalityAssessment;
