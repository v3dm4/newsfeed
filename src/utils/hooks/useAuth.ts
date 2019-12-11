import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '../../services/reducers'
import { username } from '../../services/types/auth'
import { login as loginAction } from '../../services/actions/auth/login'
import { logout as logoutAction } from '../../services/actions/auth/logout'
import {
	signUp as signUpAction,
	signUp,
} from '../../services/actions/auth/signUp'
import { LoginParams, SignUpParams } from '../../api/auth'

const userSelector = (state: RootState) => state.auth

export const useAuth = (): username => {
	const { username } = useSelector(userSelector, shallowEqual)
	return username
}

export interface IUseAuthReturnType {
	username: username
	login: (params: LoginParams) => ReturnType<typeof loginAction>
	logout: () => ReturnType<typeof logoutAction>
	signUp: (params: SignUpParams) => ReturnType<typeof signUpAction>
}

export const useAuthProvider = (): IUseAuthReturnType => {
	const username = useAuth()
	const dispatch = useDispatch()

	const login = (params: LoginParams) => dispatch(loginAction(params))

	const logout = () => dispatch(logoutAction())

	const signUp = (params: SignUpParams) => dispatch(signUpAction(params))

	return { username, login, logout, signUp }
}
