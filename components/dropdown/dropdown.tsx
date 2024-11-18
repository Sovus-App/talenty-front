'use client';

import { Button, ButtonProps, Popover, PopoverProps } from '@mui/material';
import { PropsWithChildren, ReactNode, useState, MouseEvent } from 'react';

interface DropdownProps
	extends Omit<PopoverProps, 'anchorEl' | 'onClick' | 'open'> {
	label: ReactNode;
	id: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	toggle?: ButtonProps;
}

const Dropdown = ({
	children,
	label,
	id,
	onClose,
	anchorOrigin = {
		vertical: 'bottom',
		horizontal: 'left',
	},
	onClick,
	toggle,
	...props
}: PropsWithChildren<DropdownProps>) => {
	const [popoverElement, setPopoverElement] =
		useState<HTMLButtonElement | null>(null);

	const popoverOpen = Boolean(popoverElement);
	const popoverId = popoverOpen
		? [id, 'popover'].filter(Boolean).join('_')
		: undefined;
	return (
		<div>
			<Button
				aria-describedby={popoverId}
				onClick={(event) => {
					if (onClick) {
						onClick(event);
					}
					setPopoverElement(event.currentTarget);
				}}
				{...toggle}
			>
				{label}
			</Button>
			<Popover
				id={popoverId}
				open={popoverOpen}
				anchorEl={popoverElement}
				onClose={(event, reason) => {
					if (onClose) {
						onClose(event, reason);
					}
					setPopoverElement(null);
				}}
				anchorOrigin={anchorOrigin}
				{...props}
			>
				{children}
			</Popover>
		</div>
	);
};

export default Dropdown;
