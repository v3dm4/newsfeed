import { NewsState } from '../types/news'
import { NewsActions } from '../actions/news'

export const initialState: NewsState = {
	loading: false,
	ids: [],
	articles: {},
	total: 0,
}

const news = (state = initialState, action: NewsActions): NewsState => {
	switch (action.type) {
		case 'news/get/request':
			return {
				...state,
				loading: true,
			}
		case 'news/get/resolve':
			return {
				...state,
				loading: false,
				...action.payload,
			}
		case 'news/get/reject':
			return {
				...state,
				loading: false,
				...action.payload,
			}
		default:
			return state
	}
}

export default news
