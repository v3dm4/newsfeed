import { NewsParams } from '../../api'

export const getNews = (params: NewsParams) => ({
	type: 'news/get/request',
	payload: params,
})

export type NewsActions = ReturnType<typeof getNews>
// | { type: 'news/get/request'; payload?: NewsParams }
// | { type: 'news/get/resolve'; payload: Partial<NewsState> }
// | { type: 'news/get/reject'; payload: Error }
