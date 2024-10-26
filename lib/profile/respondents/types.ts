export interface CreateRespondentData {
	full_name: string;
	date_of_birth: string;
	phone: string;
	email: string;
	gender: 'male' | 'female' | string;
}

export interface CreateRespondentResponse {
	date_of_birth: string;
	email: string;
	full_name: string;
	gender: string;
	phone: string;
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
	id: number;
	survey_changed_at: string;
	survey_status: 'completed' | 'not_completed' | string;
	survey_uuid: string;
}

export interface RespondentDetail {
	respondent: Omit<Respondent, 'survey_status' | 'survey_changed_at'> & {
		email: string;
		phone: string;
	};
	surveys: Surveys[];
}
