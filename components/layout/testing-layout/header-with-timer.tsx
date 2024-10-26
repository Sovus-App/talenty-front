import { Timer } from '@/components/timer';
import { Grid2 as Grid } from '@mui/material';
import { TalentyIcon } from '@/assets/icons';

import classes from '@/assets/styles/components/layout/layout.module.scss';

interface HeaderWithTimerProps {
	timerProgress: number;
	timerCount: number;
}

const HeaderWithTimer = ({
	timerProgress,
	timerCount,
}: HeaderWithTimerProps) => {
	return (
		<header className={classes.testing_header}>
			<Grid
				container
				justifyContent="space-between"
				component="ul"
				className={classes.navbar}
			>
				<Grid component="li">
					<TalentyIcon />
				</Grid>
				<Grid component="li">
					<Timer count={timerCount} value={timerProgress} />
				</Grid>
			</Grid>
		</header>
	);
};

export default HeaderWithTimer;
