const API_KEY = 'd9fd6f329ecb4013bfc11429ecc2f1c9'
const API_URL = 'https://newsapi.org/v2/top-headlines'

const sleep = (delay: number): Promise<void> =>
	new Promise(resolve => setTimeout(resolve, delay))
export interface LoginParams {
	username: string
	password: string
}
export type LoginResponse = { username: string }

export const checkToken = (): Promise<LoginResponse> => {
	return new Promise((resolve, reject) => {
		if (localStorage.getItem('token') === 'admin@mail.ru') {
			resolve({ username: 'admin@mail.ru' })
		} else {
			reject()
		}
	})
}

export const login = async (params: LoginParams): Promise<LoginResponse> => {
	await sleep(3000)
	const { username, password } = params
	if (username === 'admin@mail.ru' && password === '12345') {
		return { username }
	}
	throw new Error('Login or password is incorrent')
}

export type LogoutResponse = Promise<void>
export const logout = async (): LogoutResponse => {
	return new Promise(res => res())
}

export interface NewsParams {
	page?: number
}
export type NewsResponse = Promise<{
	articles: object[]
	totalResults: number
}>

export const getNews = async (
	params: NewsParams = { page: 1 }
): NewsResponse => {
	const url = `${API_URL}?country=ru&apiKey=${API_KEY}&page=${params.page}&pageSize=7`
	const result = await fetch(url)
	if (!result.ok) {
		const { error } = await result.json()
		throw new Error(error)
	}
	return result.json()
}
export interface API {
	checkToken: () => LoginResponse
	login: (params: LoginParams) => LoginResponse
	logout: () => LogoutResponse
	getNews: (params: NewsParams) => NewsResponse
}
