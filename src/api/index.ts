import { LoginParams, LoginResponse } from './auth'
import { loginWithPassword, signUpWithPassword } from './auth'
import { getNews, NewsParams, NewsResponse } from './news'

export type LogoutResponse = Promise<void>
const logout = async (): LogoutResponse => {
	return new Promise(res => res())
}

export interface API {
	login: (params: LoginParams) => LoginResponse
	logout: () => LogoutResponse
	getNews: (params: NewsParams) => NewsResponse
}

export { getNews, loginWithPassword, logout, signUpWithPassword }
