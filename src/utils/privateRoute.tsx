import React, { ComponentType } from 'react'
import { RouteComponentProps, Redirect } from '@reach/router'

interface IPrivateRouteProps extends RouteComponentProps {
	as: ComponentType
}

export const PrivateRoute: React.FC<IPrivateRouteProps> = (
	props
): JSX.Element => {
	const { as: Component, ...rest } = props
	return false ? (
		<Component {...rest} />
	) : (
		<Redirect from='' to='login' noThrow />
	)
}
