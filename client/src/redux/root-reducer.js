import { combineReducers } from 'redux'
import mainPageReducer from './main-page-data/main-page.reducer'
import userReducer from './user/user.reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['mainPageReducer', 'userReducer'],
}

const rootReducer = combineReducers({
  mainPageReducer,
  userReducer,
})

export default persistReducer(persistConfig, rootReducer)
