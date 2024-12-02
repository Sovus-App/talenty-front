import { GENDERS } from '@/tools';

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

export interface RespondentSurvey {
	survey_changed_at: string;
	survey_completed_at: string;
	survey_created_at: string;
	survey_id: string | null;
	survey_status: 'completed' | 'not_completed' | string;
	survey_uuid: string | null;
}

export interface Respondent {
	uuid: string;
	full_name: string;
	email: string;
	gender: keyof typeof GENDERS;
	date_of_birth: string;
	current_survey: RespondentSurvey;
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
