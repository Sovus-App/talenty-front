'use client';
import { useCallback, useMemo, useState } from 'react';

const useHiddenMotivation = () => {
	const testingData = { questions: [] };
	const [isIntroducePassed, setIsIntroducePassed] = useState(false);
	const [draftSelectedAnswer, setDraftSelectedAnswer] = useState();
	const [questionIndex, setQuestionIndex] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState();
	const [submittedAnswers, setSubmittedAnswers] = useState([]);

	const isLastQuestion = useMemo(
		() => questionIndex === testingData.questions.length - 1,
		[questionIndex, testingData],
	);

	const onQuestionChange = useCallback(() => {
		const updatedAnswers = [
			...submittedAnswers,
			{ ...currentQuestion, value: draftSelectedAnswer?.value },
		];
		setSubmittedAnswers(updatedAnswers);
		if (!isLastQuestion) {
			const updatedQuestionIndex = questionIndex + 1;
			setQuestionIndex(updatedQuestionIndex);
			setDraftSelectedAnswer(undefined);
			setCurrentQuestion(testingData.questions[updatedQuestionIndex]);
		} else {
			// submit to back-end
		}
	}, [
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
