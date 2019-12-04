import * as types from './loginActionTypes'

export const login = (payload: any) =>
	<const>{
		type: types.LOGIN_REQUEST,
		payload,
	}

export const resolveLogin = (payload: any) =>
	<const>{
		type: types.LOGIN_RESOLVE,
		payload,
	}

export const rejectLogin = (payload: any) =>
	<const>{
		type: types.LOGIN_REJECT,
		payload,
	}
