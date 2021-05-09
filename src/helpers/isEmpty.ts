import { InputValue } from '../hooks/useInput';

export const isEmpty = (value: InputValue): boolean => value != null && value.toString().length === 0;
