import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './root-reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'
import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
