import { all } from 'redux-saga/effects'
import { watchGetNews } from './news'

export function* rootSaga() {
	yield all([watchGetNews()])
}
