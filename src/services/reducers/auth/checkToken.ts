import { AuthState, AuthActions } from '../../types/auth'
import * as types from '../../actions/auth/authActionTypes'

export const checkTokenModule = (
	state: AuthState,
	action: AuthActions
): AuthState => {
	switch (action.type) {
		case types.AUTH_CHECK_TOKEN:
			return {
				...state,
				loading: true,
			}
		case types.AUTH_CHECK_TOKEN_REJECT:
			return {
				...state,
				loading: false,
			}
		default:
			return state
	}
}
