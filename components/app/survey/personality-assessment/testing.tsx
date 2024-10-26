import { PersonalityAssessmentAnswer } from '@/lib/survey/personality-assessment';
import Cards from './cards';

interface TestingProps {
	onClick: (code: string, type: 'positive' | 'negative') => void;
	answers: PersonalityAssessmentAnswer[];
}

const Testing = ({ onClick, answers }: TestingProps) => {
	return <Cards onClick={onClick} answers={answers} />;
};

export default Testing;
