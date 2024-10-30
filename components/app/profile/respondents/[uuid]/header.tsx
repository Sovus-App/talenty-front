import { GET_RESPONDENT_API_ROUTE, Respondent } from '@/lib';
import { createSurvey } from '@/lib/profile/respondents/createSurvey';
import { useSnackbar } from 'notistack';
import { useParams } from 'next/navigation';
import { useSWRConfig } from 'swr';

import { Grid } from '@mui/system';
import { Button, Chip as MuiChip, chipClasses } from '@mui/material';

import classes from '@/assets/styles/components/app/profile/respondents/respondents.module.scss';

interface HeaderProps {
	respondent?: Omit<Respondent, 'survey_status' | 'survey_changed_at'> & {
		email: string;
		phone: string;
	};
}

const Chip = ({ label }: { label?: string }) => (
	<MuiChip
		label={label}
		sx={{
			background: 'none',
			padding: 0,
			[`.${chipClasses.label}`]: {
				paddingLeft: 0,
			},
		}}
		size="medium"
		component="li"
	/>
);

const Header = ({ respondent }: HeaderProps) => {
	const { enqueueSnackbar } = useSnackbar();
	const params = useParams();
	const { mutate } = useSWRConfig();
	const chips = [
		respondent?.gender,
		respondent?.age,
		respondent?.email,
		respondent?.phone,
	];

	const onCreateSurveyClick = async () => {
		const data = { respondent_uuid: respondent?.uuid || '' };
		const survey = await createSurvey(data);
		if (survey?.uuid) {
			await mutate(
				`${process.env.NEXT_PUBLIC_API_BASE_URL}/${GET_RESPONDENT_API_ROUTE}/${params.uuid}`,
			);
		} else {
			enqueueSnackbar(survey?.message, { variant: 'error' });
		}
	};
	return (
		<div className={classes.respondent_card_header}>
			<Grid alignItems="center" container justifyContent="space-between">
				<h1>{respondent?.full_name || 'Петров Иван Савельевич'}</h1>
				<Button
					onClick={async () => await onCreateSurveyClick()}
					variant="contained"
					size="medium"
				>
					Назначить тестироование
				</Button>
			</Grid>
			<Grid
				className={classes.respondent_card_header_info}
				gap="16px"
				component="ul"
				container
			>
				{chips.map((chip) => (
					<Chip key={chip} label={chip} />
				))}
			</Grid>
		</div>
	);
};

export default Header;
