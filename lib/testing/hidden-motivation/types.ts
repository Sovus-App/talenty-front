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
	question_code: string;
	color_code: string;
	time_to_response: number;
}

export interface HiddenMotivationSubmit {
	colors: Omit<ConfiguredColors, 'color'>[];
	answers: HiddenMotivationAnswer[];
}

export interface HiddenMotivationTesting {
	status: 'in_progress' | 'completed' | string;
	colors: HiddenMotivationColors[];
	questions: HiddenMotivationQuestion[];
}
