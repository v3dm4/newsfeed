import { combineReducers } from 'redux'
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import newsReducer from './news'
import { NewsActions } from '../types/news'
import { AuthActions } from '../types/auth'
import { authReducer } from './auth/index'

const rootReducer = combineReducers({
	news: newsReducer,
	auth: authReducer,
	firebase: firebaseReducer as (
		state: any,
		action: any
	) => FirebaseReducer.Reducer,
	firestore: firestoreReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
export type RootAction = NewsActions & AuthActions
