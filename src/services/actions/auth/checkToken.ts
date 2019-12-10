import * as types from './authActionTypes'

export const checkToken = () =>
	<const>{
		type: types.AUTH_CHECK_TOKEN,
	}

export const checkTokenReject = () =>
	<const>{
		type: types.AUTH_CHECK_TOKEN_REJECT,
	}
