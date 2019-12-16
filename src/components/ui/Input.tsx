import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { FormLabel } from '../ui/Form/FormLabel'
import { FormElement } from '../ui/Form/FormElement'
import { FieldRenderProps } from 'react-final-form'

export const StyledInput = styled.input`
	outline: none;
	border: none;
	border-radius: 6px;
	box-sizing: border-box;
	background-color: ${props => props.theme.bg};
	color: ${props => props.theme.text};
	width: 100%;
	height: 40px;
	padding: 5px 10px;
	font-size: 16px;
	transition: all 120ms ease;

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
			<StyledInput {...input} {...props} />
			{meta.touched && meta.error && <span>{meta.error}</span>}
		</FormElement>
	)
}

export default React.memo(Input)
