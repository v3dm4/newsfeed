import React from 'react'
import styled from 'styled-components'
import { Switch, ISwitchProps, ISwitchComposition } from './Switch'
import { FormLabel } from '../Form/FormLabel'

const SwitchWithLabelWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

interface ISwitchWithLabelProps extends ISwitchProps {
	label: string
}

export const SwitchWithLabel: React.FC<ISwitchWithLabelProps> &
	ISwitchComposition = ({ label, children, ...rest }): JSX.Element => {
	return (
		<SwitchWithLabelWrapper>
			<FormLabel>{label}</FormLabel>
			<Switch {...rest}>{children}</Switch>
		</SwitchWithLabelWrapper>
	)
}

SwitchWithLabel.On = Switch.On
SwitchWithLabel.Off = Switch.Off
