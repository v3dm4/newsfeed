import { AuthState, AuthActions } from '../../types/auth'
import * as types from '../../actions/auth/authActionTypes'

export const signUpModule = (
	state: AuthState,
	action: AuthActions
): AuthState => {
	switch (action.type) {
		case types.AUTH_SIGNUP_REQUEST:
			return {
				...state,
				loading: true,
				error: undefined,
			}
		case types.AUTH_SIGNUP_RESOLVE:
			return {
				...state,
				...action.payload,
				loading: false,
			}
		case types.AUTH_SIGNUP_REJECT:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
