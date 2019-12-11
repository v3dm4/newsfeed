import { all } from 'redux-saga/effects'
import { watchGetNews } from './news'
import { authFlow } from './auth'
import { watchSignUp } from './auth'

export function* rootSaga() {
	yield all([watchGetNews(), authFlow(), watchSignUp()])
}
