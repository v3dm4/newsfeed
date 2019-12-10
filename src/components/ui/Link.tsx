import React from 'react'
import { Link as RouterLink, Match } from '@reach/router'

// need to figure out how to handle type of LinkProps with it
export const Link: React.FC<any> = ({ to, children, ...rest }): JSX.Element => {
	return (
		<Match path={to}>
			{({ match }) => <RouterLink {...rest}>{children}</RouterLink>}
		</Match>
	)
}
