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
	const [show, setShow] = React.useState<boolean>(false)

	React.useEffect(() => {
		const timeout = setTimeout(() => show !== undefined && setShow(true), 1000)
		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<>
			{show && (
				<Wrapper {...props}>
					<BallsContainer {...props}>
						<FirstBall {...props} />
						<SecondBall {...props} />
						<ThirdBall {...props} />
					</BallsContainer>
				</Wrapper>
			)}
		</>
	)
}

Spinner.defaultProps = {
	size: 25,
}
