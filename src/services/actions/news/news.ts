import { NewsParams } from '../../../api'
import { NewsState } from '../../types/news'
import * as types from './newsActionTypes'

export const getNews = (params: NewsParams) =>
	<const>{
		type: types.NEWS_GET_REQUEST,
		payload: params,
	}

export const resolveGetNews = (payload: Partial<NewsState>) =>
	<const>{
		type: types.NEWS_GET_RESOLVE,
		payload,
	}

export const rejectGetNews = (error: Error) =>
	<const>{
		type: types.NEWS_GET_REJECT,
		payload: error,
	}

export const clearNews = () =>
	<const>{
		type: types.NEWS_CLEAR,
	}
