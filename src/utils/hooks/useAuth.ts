import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '../../services/reducers'
import { username } from '../../services/types/auth'
import { login as loginAction } from '../../services/actions/auth/login'
import { logout as logoutAction } from '../../services/actions/auth/logout'
import { LoginParams } from '../../api'

const userSelector = (state: RootState) => state.auth

export const useAuth = (): username => {
	const { username } = useSelector(userSelector, shallowEqual)
	return username
}

export interface IUseAuthReturnType {
	username: username
	login: (params: LoginParams) => ReturnType<typeof loginAction>
	logout: () => ReturnType<typeof logoutAction>
}

export const useAuthProvider = (): IUseAuthReturnType => {
	const username = useAuth()
	const dispatch = useDispatch()

	const login = (params: LoginParams) => dispatch(loginAction(params))

	const logout = () => dispatch(logoutAction())

	return { username, login, logout }
}
