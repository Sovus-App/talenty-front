import {
	Accordion as MUIAccordion,
	AccordionDetails,
	AccordionProps as MUIAccordionProps,
	AccordionSummary,
} from '@mui/material';
import { ChevronRight } from '@/assets/icons';
import { ReactNode } from 'react';

interface AccordionProps extends Omit<MUIAccordionProps, 'title'> {
	title: ReactNode;
}

const Accordion = ({ children, title, id }: AccordionProps) => {
	return (
		<MUIAccordion disableGutters>
			<AccordionSummary
				aria-controls={`${id}-content`}
				id={`${id}-header`}
				expandIcon={<ChevronRight />}
			>
				{title}
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</MUIAccordion>
	);
};

export default Accordion;
