import { HiddenMotivationTesting } from './hidden-motivation';
import { PersonalityAssessmentTesting } from './personality-assessment';

export interface Survey {
	status: string;
	kind: string;
	uuid: string;
	completed_at: string;
	created_at: string;
}

export interface TestingResponse {
	survey: Survey;
	hidden_motivation_testing: HiddenMotivationTesting;
	personality_assessment_testing: PersonalityAssessmentTesting;
}
