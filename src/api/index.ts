import { loginWithPassword, signUpWithPassword, logout } from './auth'
import { getNews } from './news'

export interface API {
	loginWithPassword: typeof loginWithPassword
	logout: typeof logout
	signUpWithPassword: typeof signUpWithPassword
	getNews: typeof getNews
}

export { getNews, loginWithPassword, logout, signUpWithPassword }
