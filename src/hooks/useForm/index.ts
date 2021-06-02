import { useInput, InputProps } from '../useInput';

export const useForm = () => {
	const form: Record<string, any> = {};

	const addInput = (name: string, controlled: boolean, initial: string | number, options?: InputProps | undefined) => {
		if (form[name]) {
			throw 'Input with this name already exists';
		}

		form[name] = useInput(controlled, initial, options);
		return form[name];
	};

	const validate = (): void => {
		const keys = Object.keys(form);

		keys.forEach((key: string) => form[key].validate());
	};

	const getForm = () => form;

	return { addInput, getForm, validate };
};
