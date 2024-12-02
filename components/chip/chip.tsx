import { Chip as MUIChip, ChipProps as MUIChipProps } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';
import { FailIcon, SuccessIcon, WaitingIcon } from '@/assets/icons';
import { useMemo } from 'react';
import { OverridableStringUnion } from '@mui/types';

export interface ChipProps extends Omit<MUIChipProps, 'label'> {
	label: { text: React.ReactNode; icon?: React.ReactNode };
	rounded?: boolean;
}

const statuses = ['success', 'warning', 'error'];

const Chip = ({ sx, label, variant, rounded, ...props }: ChipProps) => {
	const innerProps = useMemo((): {
		label: { text: React.ReactNode; icon?: React.ReactNode };
		color: OverridableStringUnion<
			| 'default'
			| 'primary'
			| 'secondary'
			| 'error'
			| 'info'
			| 'success'
			| 'warning'
		>;
	} => {
		if (variant && statuses.includes(variant)) {
			if (variant === 'success') {
				return { label: { ...label, icon: <SuccessIcon /> }, color: 'success' };
			} else if (variant === 'warning') {
				return { label: { ...label, icon: <WaitingIcon /> }, color: 'warning' };
			}
			return { label: { ...label, icon: <FailIcon /> }, color: 'error' };
		}
		return { label, color: 'default' };
	}, [label, variant]);

	return (
		<MUIChip
			{...props}
			variant={variant}
			sx={rounded ? { borderRadius: '22px', ...sx } : undefined}
			color={innerProps.color}
			label={
				<Grid gap="4px" alignItems="center" container>
					{innerProps.label.icon}
					<span>{innerProps.label.text}</span>
				</Grid>
			}
		/>
	);
};

export default Chip;
