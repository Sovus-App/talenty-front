import { GENDERS } from '@/tools';
import { Respondent } from '@/lib';
import { useRouter } from 'next/navigation';

import {
	Button,
	Grid2 as Grid,
	IconButton,
	Skeleton,
	Typography,
} from '@mui/material';

import classes from '@/assets/styles/app/profile/respondents/respondents.module.scss';
import { Chip } from '@/components';
import moment from 'moment';
import { CopyIcon } from '@/assets/icons';

interface HeaderProps {
	respondent?: Omit<Respondent, 'survey_status' | 'survey_changed_at'> & {
		email: string;
		phone: string;
	};
	loading: boolean;
}

const Header = ({ respondent, loading }: HeaderProps) => {
	const router = useRouter();

	return (
		<div className={classes.respondent_card_header}>
			{loading ? (
				<Skeleton height="100px" variant="rectangular" />
			) : (
				<>
					<div className={classes.respondent_card_header_info}>
						<h1>{respondent?.full_name}</h1>
						{respondent?.gender ? (
							<Chip
								label={{ text: GENDERS[respondent.gender] }}
								variant="outlined"
								size="small"
								rounded
							/>
						) : null}
						<Typography variant="body1" color="var(--text-secondary-color)">
							{`${moment(new Date()).diff(new Date(respondent?.date_of_birth || ''), 'years')} лет`}
						</Typography>
						<Grid
							container
							gap="4px"
							component={Typography}
							variant="body1"
							color="var(--text-secondary-color)"
						>
							{respondent?.email}
							<IconButton
								onClick={() =>
									respondent?.email &&
									navigator.clipboard.writeText(respondent?.email)
								}
								sx={{ padding: 0 }}
							>
								<CopyIcon />
							</IconButton>
						</Grid>
						<Typography variant="body1" color="var(--text-secondary-color)">
							{respondent?.phone}
						</Typography>
					</div>
					<Button
						onClick={() =>
							router.push(`/survey/create?respondent_uuid=${respondent?.uuid}`)
						}
						variant="contained"
						size="medium"
					>
						Назначить тестирование
					</Button>
				</>
			)}
		</div>
	);
};

export default Header;
