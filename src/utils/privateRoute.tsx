import React, { ComponentType } from 'react'
import { RouteComponentProps, Redirect } from '@reach/router'
import { connect } from 'react-redux'
import { RootState } from '../services/reducers'
import { AuthState } from '../services/types/auth'

interface IPrivateRouteProps extends RouteComponentProps {
	as: ComponentType
}

type StateProps = AuthState

type Props = RouteComponentProps & StateProps & IPrivateRouteProps

export const PrivateRoute: React.FC<Props> = (props): JSX.Element => {
	const { as: Component, username, ...rest } = props
	return username ? (
		<Component {...rest} />
	) : (
		<Redirect from='' to='login' noThrow />
	)
}

export default connect((store: RootState) => store.auth)(PrivateRoute)
