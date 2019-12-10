import styled from 'styled-components'

export interface IPanelProps {
	minWidth?: number | string
}

export const PanelContainer = styled.div<IPanelProps>`
	min-width: ${props => typeof props.minWidth === 'string' ? props.minWidth : props.minWidth + 'px'};
	width: auto;
	background-color: ${props => props.theme.bgLight};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	border-radius: 6px;
	box-shadow: 0 0 30px ${props => props.theme.bsColor};
`

export const PanelHeader = styled.div`
	width: 100%;
	height: auto;
`

export const PanelContent = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	box-sizing: border-box;
`
