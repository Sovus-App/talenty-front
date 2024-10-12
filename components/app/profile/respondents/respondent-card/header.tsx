import classes from '@/assets/styles/app/respondents.module.scss';
import { Grid } from '@mui/system';
import { Button, Chip as MuiChip } from '@mui/material';
import { Respondent } from '@/lib';
import Link from 'next/link';

interface HeaderProps {
	respondent?: Omit<Respondent, 'survey_status' | 'survey_changed_at'> & {
		email: string;
		phone: string;
	};
}

const Chip = ({ label }: { label?: string }) => (
	<MuiChip label={label} size="medium" component="li" />
);

const Header = ({ respondent }: HeaderProps) => {
	const chips = [
		respondent?.gender || 'мужской',
		respondent?.age || '45 лет',
		respondent?.email || 'example@example.com',
		respondent?.phone || '+7 999 999 99 99',
	];
	return (
		<div className={classes.respondent_card_header}>
			<Grid alignItems="center" container justifyContent="space-between">
				<h1>{respondent?.full_name || 'Петров Иван Савельевич'}</h1>
				<Button variant="contained" size="small">
					<Link href={'/profile/respondents/create'}>Создать тестирование</Link>
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
