import styled from 'styled-components'

export const Input = styled.input`
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
