import { MutableRefObject, useRef, useState } from 'react';
import { validateValue } from '../../helpers/validate';
import { InputProps, InputValue } from '../useInput';

export const useInputUncontrolled = <T extends InputValue>(initial: T, options?: InputProps) => {
	const input = useRef<T>(initial as T) as MutableRefObject<any>;
	const [inputWrong, setInputWrong] = useState<boolean>();

	const handleInput = (e: any) => {
		setInputWrong(false);
		input.current = e.target.value;
	};

	const handleInputBlur = () => (options && validateValue(input.current, options)) && setInputWrong(true);

	const resetInput = () => input.current = '';

	const setValue = (value: string) => input.current = value;

	const value = () => input.current;

	return {
		value,
		setValue,
		error: inputWrong,
		handlers: {
			onInput: handleInput,
			onBlur: handleInputBlur
		},
		resetInput
	};
};
