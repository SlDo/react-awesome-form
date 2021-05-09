import { isEmpty } from './isEmpty';
import { InputValue } from '../hooks/useInput';

export interface Validation {
  required?: boolean,
  regExp?: RegExp
}

export const validateValue = (input: InputValue, validation: Validation) => {
	if (validation && (validation.required || validation.regExp)) {
		return (
			(validation.required && isEmpty(input)))
      || (validation.regExp && input && !validation.regExp.test(input.toString())
      );
	}

	return true;
};
