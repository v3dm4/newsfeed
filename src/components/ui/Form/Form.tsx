import React, { FormHTMLAttributes } from 'react'
import styled from 'styled-components'

interface IFormProps {
	minWidth?: number
}

const FormContainer = styled.div<IFormProps>`
	min-width: ${props => props.minWidth}px;
	width: auto;
	background-color: ${props => props.theme.bgLight};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	border-radius: 6px;
	box-shadow: 0 0 30px ${props => props.theme.bsColor};
`

const FormHeader = styled.div`
	width: 100%;
	height: auto;
`

const FormContent = styled.form`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	box-sizing: border-box;
`

interface IFormComposition {
	Content: React.ComponentType<FormHTMLAttributes<HTMLFormElement> & IFormProps>
	Header: React.FC
}

export const Form: React.FC<IFormProps> & IFormComposition = ({
	children,
	minWidth,
}): JSX.Element => {
	return <FormContainer minWidth={minWidth}>{children}</FormContainer>
}

Form.Content = FormContent
Form.Header = FormHeader

Form.defaultProps = {
	minWidth: 100,
}
