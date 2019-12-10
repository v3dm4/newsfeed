import { InferValueTypes } from '../../utils/helpers'
import * as loginActions from '../actions/auth/login'
import * as logoutActions from '../actions/auth/logout'
import * as checkTokenActions from '../actions/auth/checkToken'

const combinedActions = {
	...loginActions,
	...logoutActions,
	...checkTokenActions,
}

export type username = string | null

export interface AuthState {
	loading: boolean
	username: username
}

export type AuthActions = ReturnType<InferValueTypes<typeof combinedActions>>
