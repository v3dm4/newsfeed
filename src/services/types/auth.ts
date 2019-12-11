import { InferValueTypes } from '../../utils/helpers'
import * as loginActions from '../actions/auth/login'
import * as logoutActions from '../actions/auth/logout'
import * as checkTokenActions from '../actions/auth/checkToken'
import * as signUpActions from '../actions/auth/signUp'

const combinedActions = {
	...loginActions,
	...logoutActions,
	...checkTokenActions,
	...signUpActions,
}

export type username = string | null

export interface AuthState {
	loading: boolean
	username: username
}

export type AuthActions = ReturnType<InferValueTypes<typeof combinedActions>>
