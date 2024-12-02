import {
	CopyIcon,
	HandPeace,
	LockIcon,
	RubIcon,
	UserCirclePlus,
} from '@/assets/icons';
import { Chip } from '@/components';
import { Button } from '@mui/material';
import copyRespondentSurveyLink from '@/tools/copy-respondent-survey-link';

const generateRespondentReportStatus = (
	status: string | 'purchased' | 'not_purchased' | 'ready_for_pass',
	survey_uuid: string,
) => {
	const props = {
		title: 'Этот отчет будет доступен после покупки',
		icon: <LockIcon />,
		button: (
			<Button
				sx={{
					background: '#ffffff',
					padding: '6px 3px 6px 16px',
					gap: '8px',
				}}
				size="medium"
				variant="outlined"
			>
				Купить отчёт за
				<Chip
					size="small"
					variant="filled"
					label={{ text: 6000, icon: <RubIcon /> }}
				/>
			</Button>
		),
	};
	if (status === 'purchased') {
		Object.assign(props, {
			title: 'Этот отчет будет доступен после того как назначите тестирование',
			icon: <UserCirclePlus />,
			button: <Button variant="contained">Назначить тестирование</Button>,
		});
	} else if (status === 'ready_for_pass') {
		Object.assign(props, {
			title: 'Этот отчет будет доступен после того как проведёте тестирование',
			icon: <HandPeace />,
			button: (
				<Button
					sx={{ background: '#ffffff' }}
					variant="outlined"
					onClick={() => copyRespondentSurveyLink(survey_uuid)}
					endIcon={<CopyIcon />}
				>
					Ссылка на тест
				</Button>
			),
		});
	}
	return props;
};

export default generateRespondentReportStatus;
