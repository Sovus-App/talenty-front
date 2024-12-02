import { ReactNode } from 'react';

interface TabPanelProps {
	index: number;
	value: number;
	children: ReactNode;
}

const TabPanel = ({ index, value, children }: TabPanelProps) => (
	<div
		role="tabpanel"
		hidden={value !== index}
		id={`respondent-section-tabpanel-${index}`}
		aria-labelledby={`respondent-section-tab-${index}`}
	>
		{value === index && children}
	</div>
);

export default TabPanel;
