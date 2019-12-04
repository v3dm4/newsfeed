import styled from 'styled-components'

interface IFormElementProps {
	margin?: 's' | 'm' | 'l'
}

const margins = {
	s: '5px',
	m: '10px',
	l: '20px',
}

export const FormElement = styled.div<IFormElementProps>`
	margin: ${props => props.margin && margins[props.margin]} 0;
	width: 100%;
	height: auto;
`

FormElement.defaultProps = {
	margin: 'm',
}
