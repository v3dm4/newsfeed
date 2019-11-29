import React from 'react'
import { Header } from '../ui/Header'

export const NewsCardHeader: React.FC = (props): JSX.Element => {
	return (
		<Header
			style={{
				height: '100px',
			}}
		>
			{props.children}
		</Header>
	)
}
