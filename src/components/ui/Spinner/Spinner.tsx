import React from 'react'
import {
	Wrapper,
	BallsContainer,
	FirstBall,
	SecondBall,
	ThirdBall,
} from './styledComps'

export interface ISpinnerProps {
	size?: number
}

export const Spinner: React.FC<ISpinnerProps> = (props): JSX.Element => {
	return (
		<Wrapper {...props}>
			<BallsContainer {...props}>
				<FirstBall {...props} />
				<SecondBall {...props} />
				<ThirdBall {...props} />
			</BallsContainer>
		</Wrapper>
	)
}

Spinner.defaultProps = {
	size: 25,
}
