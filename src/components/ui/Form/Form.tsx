import React, { FormHTMLAttributes } from 'react'
import {
	IFormProps,
	FormContainer,
	FormContent,
	FormHeader,
} from './styledComps'

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
