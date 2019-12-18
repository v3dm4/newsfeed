export type IValidatorError = string

export type IValidatorFunc = (value: any) => IValidatorError | null

export type IValidator = IValidatorFunc | ((arg: any) => IValidatorFunc)

export const validators = {
	required: (value: string) => (value ? null : 'Required'),
	email: (value: string) => {
		return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
			? null
			: 'Invalid Email'
	},
	minLength: (len: number) => (value: string) =>
		value.length > len ? null : `Minimum ${len} symbols allowed`,
}

export const combineValidators = (...validators: IValidator[]) => (
	value: any
) =>
	validators.reduce(
		(error: string | null | IValidatorFunc, validator) =>
			error || validator(value),
		null
	)
