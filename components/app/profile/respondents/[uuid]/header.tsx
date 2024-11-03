import moment from 'moment';
import { GENDERS } from '@/tools';
import { Respondent } from '@/lib';
import { useRouter } from 'next/navigation';

import { Grid } from '@mui/system';
import { Button, Chip as MuiChip, chipClasses, Skeleton } from '@mui/material';

import classes from '@/assets/styles/components/app/profile/respondents/respondents.module.scss';

interface HeaderProps {
	respondent?: Omit<Respondent, 'survey_status' | 'survey_changed_at'> & {
		email: string;
		phone: string;
	};
	loading: boolean;
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

const Header = ({ respondent, loading }: HeaderProps) => {
	const router = useRouter();
	const chips = [
		respondent?.gender ? GENDERS[respondent?.gender] : '',
		`${moment(new Date()).diff(new Date(respondent?.date_of_birth || ''), 'years')} лет`,
		respondent?.email,
		respondent?.phone,
	];

	return (
		<div className={classes.respondent_card_header}>
			{loading ? (
				<Skeleton height="100px" variant="rectangular" />
			) : (
				<>
					<Grid alignItems="center" container justifyContent="space-between">
						<h1>{respondent?.full_name}</h1>
						<Button
							onClick={() =>
								router.push(
									`/survey/create?respondent_uuid=${respondent?.uuid}`,
								)
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
				</>
			)}
		</div>
	);
};

export default Header;
