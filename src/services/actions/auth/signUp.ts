import * as types from './authActionTypes'
import { AuthState } from '../../types/auth'
import { SignUpParams } from '../../../api/auth'

export const signUp = (payload: SignUpParams) =>
	<const>{
		type: types.AUTH_SIGNUP_REQUEST,
		payload,
	}

export const resolveSignUp = (payload: Partial<AuthState>) =>
	<const>{
		type: types.AUTH_SIGNUP_RESOLVE,
		payload,
	}

export const rejectSignUp = (payload: Error) =>
	<const>{
		type: types.AUTH_SIGNUP_REJECT,
		payload,
	}
