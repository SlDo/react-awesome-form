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

	const validate = (): void => {
		if (options) {
			return setInputWrong(!validateValue(input.current, options));
		}

		return setInputWrong(false);
	};

	const handleInputBlur = () => validate();

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
		resetInput,
		validate
	};
};
