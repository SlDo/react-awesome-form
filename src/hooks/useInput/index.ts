import { useInputControlled } from '../useInputControlled';
import { useInputUncontrolled } from '../useInputUncontrolled';

export interface InputProps {
  regExp?: RegExp,
  required?: boolean
}

export type InputValue = string | number | null | undefined

export const useInput = <T extends InputValue>(controlled: boolean, initial: T, options?: InputProps) => {
	return controlled ? useInputControlled<T>(initial, options) : useInputUncontrolled(initial, options);
};
