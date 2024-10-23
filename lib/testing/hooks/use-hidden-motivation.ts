'use client';

import { useCallback, useMemo, useState } from 'react';
import {
	ConfiguredColors,
	HiddenMotivationAnswer,
	HiddenMotivationQuestion,
	HiddenMotivationTesting,
} from '../hidden-motivation/types';
import { submitTesting } from '../hidden-motivation';
import { useParams, useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import moment from 'moment/moment';

const useHiddenMotivation = ({
	testingData,
	configuredColors,
}: {
	testingData: HiddenMotivationTesting;
	configuredColors: ConfiguredColors[];
}) => {
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();
	const params: { unique_token: string } = useParams();
	const [timeToResponse, setTimeToResponse] = useState(new Date());
	const [isIntroducePassed, setIsIntroducePassed] = useState(false);
	const [draftSelectedAnswer, setDraftSelectedAnswer] = useState<
		ConfiguredColors | undefined
	>();
	const [questionIndex, setQuestionIndex] = useState(0);
	const [currentQuestion, setCurrentQuestion] =
		useState<HiddenMotivationQuestion>(testingData.questions[questionIndex]);
	const [submittedAnswers, setSubmittedAnswers] = useState<
		HiddenMotivationAnswer[]
	>([]);

	const isLastQuestion = useMemo(
		() => questionIndex === testingData.questions.length - 1,
		[questionIndex, testingData],
	);

	const onQuestionChange = useCallback(async () => {
		const now = new Date();
		const updatedAnswers = [
			...submittedAnswers,
			{
				question_code: Number(currentQuestion?.code),
				color_code: Number(draftSelectedAnswer?.code),
				time_to_response: moment(now).diff(timeToResponse, 'milliseconds'),
			},
		];
		setSubmittedAnswers(updatedAnswers);
		setTimeToResponse(now);
		if (!isLastQuestion) {
			const updatedQuestionIndex = questionIndex + 1;
			setQuestionIndex(updatedQuestionIndex);
			setDraftSelectedAnswer(undefined);
			setCurrentQuestion(testingData.questions[updatedQuestionIndex]);
		} else {
			const response = await submitTesting({
				respondent_unique_token: params?.unique_token,
				hiddenMotivationTestingData: {
					answers: updatedAnswers,
					colors: configuredColors.map((color) => ({
						order: color.order,
						code: Number(color.code),
					})),
				},
			});
			if (response?.data) {
				router.push(`/testing/${params?.unique_token}/passed`);
			} else if (response?.error?.message) {
				enqueueSnackbar(response.error.message, { variant: 'error' });
			}
		}
	}, [
		timeToResponse,
		configuredColors,
		params?.unique_token,
		currentQuestion,
		draftSelectedAnswer,
		isLastQuestion,
		submittedAnswers,
		questionIndex,
		testingData,
	]);

	const onClick = useCallback(() => {
		if (!isIntroducePassed) {
			setIsIntroducePassed(!isIntroducePassed);
		} else {
			onQuestionChange();
		}
	}, [isIntroducePassed, onQuestionChange]);

	const buttonProps = {
		onClick,
		disabled: isIntroducePassed ? !draftSelectedAnswer : false,
		children: !isIntroducePassed ? 'Продолжить прохождение' : 'Далее',
	};

	return {
		buttonProps,
		currentQuestion,
		isIntroducePassed,
		draftSelectedAnswer,
		setDraftSelectedAnswer,
	};
};

export default useHiddenMotivation;
