'use client';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import { ReactNode } from 'react';

interface PhoneInputMask<T>
	extends Omit<InputMaskProps, 'children' | 'mask' | 'placeholder'> {
	children?: (inputProps: T) => ReactNode;
}
const PhoneInputMask = <T,>({ children, ...props }: PhoneInputMask<T>) => {
	const child = children as ReactNode;
	return (
		<InputMask {...props} mask="+7 (999) 999-99-99" placeholder="+7">
			{child}
		</InputMask>
	);
};

export default PhoneInputMask;
