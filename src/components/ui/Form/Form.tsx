import styled from 'styled-components'

interface IFormProps {
	minWidth?: number
}

export const Form = styled.form<IFormProps>`
	border-radius: 6px;
	box-shadow: 0 0 30px ${props => props.theme.bsColor};
	min-width: ${props => props.minWidth}px;
	width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	background-color: ${props => props.theme.bgLight};
`

Form.defaultProps = {
	minWidth: 100,
}
