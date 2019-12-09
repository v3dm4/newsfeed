import * as types from './authActionTypes'

export const logout = () =>
	<const>{
		type: types.AUTH_LOGOUT_REQUEST,
	}

export const resolveLogout = () =>
	<const>{
		type: types.AUTH_LOGOUT_RESOLVE,
	}

export const rejectLogout = (payload: Error) =>
	<const>{
		type: types.AUTH_LOGOUT_REJECT,
		payload,
	}
