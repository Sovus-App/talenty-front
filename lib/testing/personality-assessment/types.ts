export interface PersonalityAssessmentAnswer {
	text: string;
	code: string;
	value: number;
}

export interface PersonalityAssessmentSubmitted {
	items: { code: number; value: number }[];
	time_to_response: number;
}

export interface PersonalityAssessmentQuestion {
	code: string;
	text: string;
}

export interface PersonalityAssessmentTesting {
	questions: PersonalityAssessmentQuestion[][];
}
