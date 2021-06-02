import { isEmpty } from './isEmpty';
import { InputValue } from '../hooks/useInput';

export interface Validation {
  required?: boolean,
  regExp?: RegExp
}

export const validateValue = (input: InputValue, validation: Validation) => {
	if (validation) {
		return (
			!(validation.required && isEmpty(input)) &&
			(input != null && validation?.regExp?.test(input.toString()))
		);
	}

	return true;
};
