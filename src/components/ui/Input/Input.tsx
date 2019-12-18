import React, { InputHTMLAttributes } from 'react'
import { FormLabel } from '../Form/FormLabel'
import { FormElement } from '../Form/FormElement'
import { FieldRenderProps } from 'react-final-form'
import { StyledInput, InputError } from './styledComps'
import { IMarginSizes } from '../Form/FormElement'

interface IInputProps {
  label?: string
  margin?: IMarginSizes
}

type Props = FieldRenderProps<string, HTMLInputElement> &
	IInputProps &
	InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = ({
	label,
  input,
  margin,
	meta,
	...props
}): JSX.Element => {
	return (
		<FormElement margin={margin}>
			{label && (
				<FormElement margin='s'>
					<FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
				</FormElement>
			)}
			<StyledInput {...input} {...props} error={meta.touched && meta.error} />
			{meta.touched && meta.error && <InputError>{meta.error}</InputError>}
		</FormElement>
	)
}

export default React.memo(Input)
