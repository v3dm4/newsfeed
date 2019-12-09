import * as types from './authActionTypes'
import { LoginParams } from '../../../api'
import { AuthState } from '../../types/auth'

export const login = (payload: LoginParams) =>
	<const>{
		type: types.AUTH_LOGIN_REQUEST,
		payload,
	}

export const resolveLogin = (payload: Partial<AuthState>) =>
	<const>{
		type: types.AUTH_LOGIN_RESOLVE,
		payload,
	}

export const rejectLogin = (payload: Error) =>
	<const>{
		type: types.AUTH_LOGIN_REJECT,
		payload,
	}
