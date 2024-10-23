export interface ConfiguredColors {
	color: string;
	order: number;
	code: string;
}

export interface HiddenMotivationColors {
	code: string;
	color: string;
}

export interface HiddenMotivationQuestion {
	code: string;
	text: string;
}

export interface HiddenMotivationAnswer {
	question_code: number;
	color_code: number;
	time_to_response: number;
}

export interface HiddenMotivationSubmit {
	colors: { code: number; order: number }[];
	answers: HiddenMotivationAnswer[];
}

export interface HiddenMotivationTesting {
	status: 'in_progress' | 'completed' | string;
	colors: HiddenMotivationColors[];
	questions: HiddenMotivationQuestion[];
}
