import styled from 'styled-components'

export const ErrorMessage = styled.div`
	border-radius: 6px;
	min-width: 100px;
	min-height: 50px;
	padding: 20px;
	background-color: ${props => props.theme.lightError};
	color: ${props => props.theme.text};
`
