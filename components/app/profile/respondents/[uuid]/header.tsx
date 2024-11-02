import { Respondent } from '@/lib';
import { useRouter } from 'next/navigation';

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
	const router = useRouter();
	const chips = [
		respondent?.gender,
		respondent?.age,
		respondent?.email,
		respondent?.phone,
	];

	return (
		<div className={classes.respondent_card_header}>
			<Grid alignItems="center" container justifyContent="space-between">
				<h1>{respondent?.full_name || 'Петров Иван Савельевич'}</h1>
				<Button
					onClick={() =>
						router.push(`/survey/create?respondent_uuid=${respondent?.uuid}`)
					}
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
