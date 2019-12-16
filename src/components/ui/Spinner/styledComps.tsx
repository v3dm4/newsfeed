import styled from 'styled-components'
import { spinnerMovement, spinnerMovementRev } from './keyframes'
import { ISpinnerProps } from './Spinner'

export const Wrapper = styled.div<ISpinnerProps>`
	width: ${props => props.size && props.size * 2}px;
	height: ${props => props.size && props.size}px;
	display: inline-block;
	overflow: hidden;
`

export const BallsContainer = styled.div<ISpinnerProps>`
	width: 100%;
	height: 100%;
	position: relative;
	transform: translateZ(0) scale(1);
	backface-visibility: hidden;
	transform-origin: 0 0;
`

export const Ball = styled.div<ISpinnerProps>`
	position: absolute;
	width: ${props => props.size && props.size}px;
	height: ${props => props.size && props.size}px;
	border-radius: 50%;
	top: 0px;
	left: 0px;
	box-sizing: content-box;
`

export const FirstBall = styled(Ball)<ISpinnerProps>`
	background: ${props => props.theme.success};
	animation: ${props => props.size && spinnerMovementRev(props.size)} 1s linear
		infinite;
	animation-delay: -0.5s;
`
export const SecondBall = styled(Ball)<ISpinnerProps>`
	background: ${props => props.theme.accent};
	animation: ${props => props.size && spinnerMovementRev(props.size)} 1s linear
		infinite;
	animation-delay: 0s;
`

export const ThirdBall = styled(Ball)<ISpinnerProps>`
	background: ${props => props.theme.success};
	animation: ${props => props.size && spinnerMovement(props.size)} 1s linear
		infinite;
	animation-delay: -0.5s;
`
