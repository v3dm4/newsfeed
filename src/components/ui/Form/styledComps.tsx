import styled from 'styled-components'

export interface IFormProps {
	minWidth?: number
}

export const FormContainer = styled.div<IFormProps>`
	min-width: ${props => props.minWidth}px;
	width: auto;
	background-color: ${props => props.theme.bgLight};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	border-radius: 6px;
	box-shadow: 0 0 30px ${props => props.theme.bsColor};
`

export const FormHeader = styled.div`
	width: 100%;
	height: auto;
`

export const FormContent = styled.form`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	box-sizing: border-box;
`
