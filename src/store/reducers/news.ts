import { NewsState, NewsActions } from '../types/news'
import * as types from '../actions/news/newsActionTypes'

export const initialState: NewsState = {
	loading: false,
	ids: ['123'],
	articles: {
		'123': {
			id: '123',
			title:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ipsam.',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum nesciunt eum earum adipisci veritatis, omnis vero fugiat, consequatur, ratione voluptas nihil. Modi laudantium placeat repellendus iure eveniet eaque a?',
			urlToImage:
				'https://avatars.mds.yandex.net/get-pdb/216365/eb43844b-51d6-41a0-86c0-0f3c47da5b48/s375',
			publishedAt: '123',
		},
	},
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
				loading: false,
				...action.payload,
			}
		case types.NEWS_GET_REJECT:
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
