import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../services/reducers'
import { uid } from '../../services/types/auth'
import { login as loginAction } from '../../services/actions/auth/login'
import { logout as logoutAction } from '../../services/actions/auth/logout'
import { signUp as signUpAction } from '../../services/actions/auth/signUp'
import { LoginParams, SignUpParams } from '../../api/auth'

const userSelector = (state: RootState) => state.firebase.auth.uid

export const useAuth = (): uid => {
	const uid = useSelector(userSelector)
	return uid
}

export interface IUseAuthReturnType {
	uid: uid
	login: (params: LoginParams) => ReturnType<typeof loginAction>
	logout: () => ReturnType<typeof logoutAction>
	signUp: (params: SignUpParams) => ReturnType<typeof signUpAction>
}

export const useAuthProvider = (): IUseAuthReturnType => {
	const uid = useAuth()
	const dispatch = useDispatch()

	const login = (params: LoginParams) => dispatch(loginAction(params))

	const logout = () => dispatch(logoutAction())

	const signUp = (params: SignUpParams) => dispatch(signUpAction(params))

	return { uid, login, logout, signUp }
}
