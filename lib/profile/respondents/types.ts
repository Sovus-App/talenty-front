export interface CreateRespondentData {
	full_name: string;
	date_of_birth: string;
	phone: string;
	email: string;
	gender: 'male' | 'female' | string;
}

export interface CreateRespondentResponse {
	uuid: string;
}

export interface Respondent {
	uuid: string;
	full_name: string;
	gender: string;
	age: string;
	survey_changed_at: string;
	survey_status: 'completed' | 'not_completed' | string;
	survey_completed_at: string;
}

export interface Surveys {
	number: number;
	survey_changed_at: string;
	survey_status: 'completed' | 'not_completed' | string;
	link_for_respondent: string;
}

export interface RespondentDetail {
	respondent: Omit<Respondent, 'survey_status' | 'survey_changed_at'> & {
		email: string;
		phone: string;
	};
	surveys: Surveys[];
}
