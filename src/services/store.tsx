import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import rootReducer from './reducers/index'
import { rootSaga } from './sagas/root'

const sagaMiddleware: SagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)
