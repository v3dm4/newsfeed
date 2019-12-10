import { all } from 'redux-saga/effects'
import { watchGetNews } from './news'
import { authFlow, watchCheckToken } from './auth'

export function* rootSaga() {
	yield all([watchGetNews(), authFlow(), watchCheckToken()])
}
