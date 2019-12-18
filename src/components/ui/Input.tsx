import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { FormLabel } from '../ui/Form/FormLabel'
import { FormElement } from '../ui/Form/FormElement'
import { FieldRenderProps } from 'react-final-form'

export const InputError = styled.div`
	position: absolute;
	font-size: 11px;
	font-weight: 500;
	color: ${props => props.theme.error};
	top: 72px;
`

interface IStyledInputProps {
	error?: string
}

export const StyledInput = styled.input<IStyledInputProps>`
	outline: none;
	border: none;
	border-radius: 6px;
	box-sizing: border-box;
	background-color: ${props =>
		props.error ? props.theme.lightError : props.theme.bg};
	color: ${props => props.theme.text};
	width: 100%;
	height: 40px;
	padding: 5px 10px;
	font-size: 16px;
	transition: box-shadow 120ms ease, background-color 250ms ease,
		color 250ms ease;

	:focus {
		box-shadow: 0 0 4px ${props => props.theme.accent};
	}
`
interface IInputProps {
	label?: string
}

type Props = FieldRenderProps<string, HTMLInputElement> &
	IInputProps &
	InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = ({
	label,
	input,
	meta,
	...props
}): JSX.Element => {
	return (
		<FormElement>
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
