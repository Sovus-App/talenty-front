import classes from '@/assets/styles/components/timer/timer.module.scss';
import {
	CircularProgress,
	CircularProgressProps,
	Typography,
} from '@mui/material';

interface TimerProps extends CircularProgressProps {
	value: number;
	count: number;
}

const Timer = ({ count, ...props }: TimerProps) => {
	return (
		<div className={classes.timer}>
			<CircularProgress
				variant="determinate"
				{...props}
				color={count > 10 ? 'primary' : 'error'}
			/>
			<div className={classes.timer_label}>
				<Typography
					sx={{
						color: count > 10 ? 'var(--primary-color)' : '#ff0000',
					}}
					variant="body1"
				>
					{count > 9 ? count : '0' + count}
				</Typography>
			</div>
		</div>
	);
};

export default Timer;
