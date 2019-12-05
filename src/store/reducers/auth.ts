import { AuthState, AuthActions } from '../types/auth'
import * as types from '../actions/auth/authActionTypes'

export const initialState: AuthState = {
	loading: false,
	username: null,
}

const auth = (state = initialState, action: AuthActions): AuthState => {
	switch (action.type) {
		case types.AUTH_LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			}
		case types.AUTH_LOGIN_RESOLVE:
			return {
				...state,
				...action.payload,
				loading: false,
			}
		case types.AUTH_LOGIN_REJECT:
			return {
				...state,
				loading: false,
			}
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

export default auth
