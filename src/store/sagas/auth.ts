import { call as typedCall, take as typedTake } from 'typed-redux-saga'
import * as api from '../../api/index'
import * as loginActions from '../actions/auth/login'
import { SagaIterator } from 'redux-saga'
import * as types from '../actions/auth/authActionTypes'
import { put, fork, take, cancel, cancelled } from 'redux-saga/effects'

// TODO: need a little bit of refactoring

function* authorize(payload: api.LoginParams): SagaIterator {
	try {
		const token = yield* typedCall(api.login, payload)
		localStorage.setItem('token', 'admin')
		yield put(loginActions.resolveLogin())
	} catch (err) {
		yield put(loginActions.rejectLogin(err))
	} finally {
		if (yield cancelled()) {
			yield put(
				loginActions.rejectLogin(new Error('authorize task was cancelled'))
			)
		}
	}
}

export function* authFlow(): SagaIterator {
	while (true) {
		const { payload } = yield* typedTake(loginActions.login)
		const task = yield fork(authorize, payload)
		const action = yield take([loginActions.rejectLogin])
		if (action.type === types.AUTH_LOGOUT_REQUEST) {
			yield cancel(task)
		}
		localStorage.removeItem('token')
	}
}
