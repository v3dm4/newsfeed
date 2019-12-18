import styled from 'styled-components'

export const InputError = styled.div`
	position: absolute;
	font-size: 11px;
	font-weight: 500;
	color: ${props => props.theme.error};
	top: 65px;
`
interface IStyledInputProps {
	error?: string
}

export const StyledInput = styled.input<IStyledInputProps>`
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
	transition: box-shadow 120ms ease, background-color 250ms ease,
		color 250ms ease;

	:focus {
		box-shadow: 0 0 4px ${props => props.theme.accent};
	}

	:disabled {
		user-select: none;
		cursor: not-allowed;
	}
`
