import { InferValueTypes } from '../../utils/helpers'
import * as loginActions from '../actions/auth/login'
import * as logoutActions from '../actions/auth/logout'
import * as signUpActions from '../actions/auth/signUp'

const combinedActions = {
	...loginActions,
	...logoutActions,
	...signUpActions,
}

export type uid = string | null

export interface AuthState {
	loading: boolean
}

export type AuthActions = ReturnType<InferValueTypes<typeof combinedActions>>
