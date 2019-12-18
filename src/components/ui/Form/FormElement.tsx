import styled from 'styled-components'

export type IMarginSizes = 's' | 'm' | 'l' | 'none'

interface IFormElementProps {
	margin?: IMarginSizes
	mt?: IMarginSizes
	mb?: IMarginSizes
}

const margins = {
	none: '0',
	s: '5px',
	m: '10px',
	l: '20px',
}

export const FormElement = styled.div<IFormElementProps>`
	margin: ${props => props.margin && margins[props.margin]} 0;
	margin-top: ${props => props.mt && margins[props.mt]};
	margin-bottom: ${props => props.mb && margins[props.mb]};
	width: 100%;
	height: auto;
	position: relative;
`

FormElement.defaultProps = {
	margin: 'm',
	mt: undefined,
	mb: undefined,
}
