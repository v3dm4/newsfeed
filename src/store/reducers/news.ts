import { NewsState, NewsActions } from '../types/news'
import * as types from '../actions/news/newsActionTypes'

export const initialState: NewsState = {
	loading: false,
	ids: [],
	articles: {},
	total: 0,
}

const news = (state = initialState, action: NewsActions): NewsState => {
	switch (action.type) {
		case types.NEWS_GET_REQUEST:
			return {
				...state,
				loading: true,
			}
		case types.NEWS_GET_RESOLVE:
			return {
				...state,
				...action.payload,
				loading: false,
			}
		case types.NEWS_GET_REJECT:
			return {
				...state,
				loading: false,
				...action.payload,
			}
		case types.NEWS_CLEAR:
			return {
				...initialState,
				ids: [],
				articles: {},
			}
		default:
			return state
	}
}

export default news
