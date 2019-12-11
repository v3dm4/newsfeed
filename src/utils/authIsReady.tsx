import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../services/reducers'
import { isLoaded } from 'react-redux-firebase'

export const AuthIsReady: React.FC = ({ children }): JSX.Element => {
	const auth = useSelector(
		(state: RootState) => state.firebase.auth,
		shallowEqual
	)
	if (!isLoaded(auth)) return <div>Loading services...</div>
	return <>{children}</>
}
