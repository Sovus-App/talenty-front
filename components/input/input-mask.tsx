'use client';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';
import { ReactNode } from 'react';

interface TInputMaskCorrect<T> extends Omit<InputMaskProps, 'children'> {
	children?: (inputProps: T) => JSX.Element;
}
const InputMaskCorrect = <T,>({ children, ...props }: TInputMaskCorrect<T>) => {
	const child = children as ReactNode;
	return <InputMask {...props}>{child}</InputMask>;
};

export default InputMaskCorrect;
