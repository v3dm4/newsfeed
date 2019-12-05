import { InferValueTypes } from '../../utils/helpers'
import * as loginActions from '../actions/auth/login'
import * as logoutActions from '../actions/auth/logout'

const combinedActions = { ...loginActions, ...logoutActions }

export interface AuthState {
	loading: boolean
	username: string | null
}

export type AuthActions = ReturnType<InferValueTypes<typeof combinedActions>>
