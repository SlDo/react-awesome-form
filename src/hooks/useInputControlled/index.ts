import { useState } from 'react';
import { validateValue } from '../../helpers/validate';
import { InputProps, InputValue } from '../useInput';

export const useInputControlled = <T extends InputValue>(initial: T, options?: InputProps) => {
	const [input, setInput] = useState<T>(initial as T);
	const [inputWrong, setInputWrong] = useState<boolean>();

	const validate = (): void => {
		if (options) {
			return setInputWrong(!validateValue(input, options));
		}

		return setInputWrong(false);
	};

	const handleInput = (e: any) => {
	  	setInputWrong(false);
		setInput(e.target.value);
	};

	const handleInputBlur = () => {
		console.log('blur');
		validate();
	};

	const resetInput = () => setInput('' as T);

	const value = () => input;

	return {
		value,
		setValue: setInput,
		error: inputWrong,
		handlers: {
			onInput: handleInput,
			onBlur: handleInputBlur
		},
		resetInput,
		validate
	};
};
