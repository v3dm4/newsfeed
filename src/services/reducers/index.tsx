import { combineReducers } from 'redux'
import newsReducer from './news'
import { NewsActions } from '../types/news'
import { AuthActions } from '../types/auth'
import authReducer from './auth'

const rootReducer = combineReducers({
	news: newsReducer,
	auth: authReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
export type RootAction = NewsActions & AuthActions
