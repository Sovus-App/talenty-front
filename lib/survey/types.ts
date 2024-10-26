import { HiddenMotivationTesting } from './hidden-motivation';
import { PersonalityAssessmentTesting } from './personality-assessment';

export enum SurveyTypes {
	HIDDEN_MOTIVATION = 'hidden_motivation',
	PERSONALITY_ASSESSMENT = 'personality_assessment',
}

export interface Survey {
	status: string;
	kind: string;
	uuid: string;
	completed_at: string;
	created_at: string;
}

export interface SurveyResponse {
	survey: Survey;
	hidden_motivation_testing: HiddenMotivationTesting;
	personality_assessment_testing: PersonalityAssessmentTesting;
}
