import styled from 'styled-components'

export const ErrorMessage = styled.div`
	border-radius: 6px;
	min-width: 100px;
	min-height: 50px;
	background-color: red;
	color: ${props => props.theme.text};
`
