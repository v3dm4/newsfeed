import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
	width: 40px;
	height: 20px;
	background-color: #424242;
	transition: background-color 250ms ease;
	border-radius: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
`
interface TogglerProps {
	state: boolean
}

const Toggler = styled.div<TogglerProps>`
	width: 12px;
	height: 12px;
	margin-left: 3px;
	margin-right: 3px;
	background-color: #fff;
	border-radius: 50%;
	transform: translateX(${props => (props.state ? '0' : '18px')});
	transition: all 250ms ease;
`

interface ISwitchProps {
	value: boolean
	onChange: (value: boolean) => void
}

export const Switch: React.FC<ISwitchProps> = ({
	value,
	onChange,
}): JSX.Element => {
	return (
		<Background onClick={() => onChange(!value)}>
			<Toggler state={value} />
		</Background>
	)
}

Switch.defaultProps = {
	value: false,
}
