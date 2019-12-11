import { NEWS_API_KEY, NEWS_API_URL } from './config'

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
	const url = `${NEWS_API_URL}?country=ru&apiKey=${NEWS_API_KEY}&page=${params.page}&pageSize=7`
	const result = await fetch(url)
	if (!result.ok) {
		const { error } = await result.json()
		throw new Error(error)
	}
	return result.json()
}
