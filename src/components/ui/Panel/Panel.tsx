import React, { HTMLAttributes } from 'react'
import {
	IPanelProps,
	PanelContainer,
	PanelContent,
	PanelHeader,
} from './styledComps'

interface IPanelComposition {
	Content: React.FC<HTMLAttributes<HTMLDivElement> & IPanelProps>
	Header: React.FC
}

export const Panel: React.FC<IPanelProps> & IPanelComposition = ({
	children,
	minWidth,
}): JSX.Element => {
	return <PanelContainer minWidth={minWidth}>{children}</PanelContainer>
}

Panel.Content = PanelContent
Panel.Header = PanelHeader

Panel.defaultProps = {
	minWidth: 100,
}
