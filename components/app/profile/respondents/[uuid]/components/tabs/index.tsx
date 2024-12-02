import { SyntheticEvent, useState } from 'react';
import { Respondent } from '@/lib';

import { Tab, Tabs as MUITabs } from '@mui/material';
import TabPanel from './components/tabpanel';
import Reports from './components/reports';
import TestingHistory from './components/testing-history';
import OrderHistory from './components/order-history';

interface RespondentCardTabsProps {
	respondent?: Respondent;
}

const Tabs = ({ respondent }: RespondentCardTabsProps) => {
	const [tab, setTab] = useState(0);

	const handleChange = (_event: SyntheticEvent, newTab: number) => {
		setTab(newTab);
	};

	const sections = [
		{ title: 'Отчеты', component: <Reports /> },
		{
			title: 'История тестов',
			component: (
				<TestingHistory
					data={respondent?.current_survey ? [respondent?.current_survey] : []}
				/>
			),
		},
		{
			title: 'История покупок',
			component: <OrderHistory />,
		},
	];

	return (
		<div>
			<MUITabs
				value={tab}
				onChange={handleChange}
				aria-label="respondent card sections"
			>
				{sections.map((section, index) => (
					<Tab
						key={section.title}
						label={section.title}
						id={`respondent-section-tab-${index}`}
					/>
				))}
			</MUITabs>
			{sections.map((section, index) => (
				<TabPanel
					key={'section-tabpanel-' + section.title}
					index={index}
					value={tab}
				>
					{section.component}
				</TabPanel>
			))}
		</div>
	);
};

export default Tabs;
