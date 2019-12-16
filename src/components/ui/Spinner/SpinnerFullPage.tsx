import React from 'react'
import { Spinner } from './Spinner'
import styled from 'styled-components'

const SpinnerContainer = styled.div`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`

export const FullPageSpinner: React.FC = (): JSX.Element => {
	return (
		<SpinnerContainer>
			<Spinner />
		</SpinnerContainer>
	)
}
