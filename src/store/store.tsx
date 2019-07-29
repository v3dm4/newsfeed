import { createStore, applyMiddleware, compose } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import rootReducer, { RootState, RootAction } from './reducers/index'
import * as API from '../api/index'

const middleware = [thunk.withExtraArgument(API) as ThunkMiddleware<RootState, RootAction, API.API>]

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
 