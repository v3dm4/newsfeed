import { put, takeEvery, all, call } from 'redux-saga/effects'
import { call as typedCall } from 'typed-redux-saga'
import * as api from '../../api/index'
import { NewsElement } from '../types/news'
import { NewsActions } from '../actions/news'
import { SagaIterator } from 'redux-saga'

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* getNews(action: NewsActions): SagaIterator {
	try {
		const { articles, totalResults } = yield* typedCall(
			api.getNews,
			action.payload
		)
		const initialModel: {
			ids: string[]
			articles: {
				[key: string]: NewsElement
			}
			total: number
		} = {
			ids: [],
			articles: {},
			total: 0,
		}
		const payload = {
			total: Math.floor(totalResults / 10) + 1,
			...articles.reduce((result: any, currVal: any) => {
				const { source, publishedAt } = currVal as any
				const id = `${source.name}|||${publishedAt}`
				result.ids.push(id)
				result.articles[id] = { id, ...currVal }
				return result
			}, initialModel),
		}
		yield call(delay, 2000)
		yield put({ type: 'news/get/resolve', payload })
	} catch (err) {
		yield put({ type: 'news/get/reject', payload: err })
	}
}

export function* watchIncrementAsync() {
	yield takeEvery('news/get/request', getNews)
}

export function* rootSaga() {
	yield all([watchIncrementAsync()])
}
