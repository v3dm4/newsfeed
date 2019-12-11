import { AuthState, AuthActions } from '../../types/auth'
import * as types from '../../actions/auth/authActionTypes'

export const logoutModule = (
	state: AuthState,
	action: AuthActions
): AuthState => {
	switch (action.type) {
		case types.AUTH_LOGOUT_REQUEST:
			return {
				...state,
				loading: true,
			}
		case types.AUTH_LOGOUT_RESOLVE:
			return {
				...state,
				username: null,
				loading: false,
			}
		case types.AUTH_LOGOUT_REJECT:
			return {
				...state,
				loading: false,
			}
		default:
			return state
	}
}
