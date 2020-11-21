import { combineReducers } from 'redux'
import mainPageReducer from './main-page-data/main-page.reducer'
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  mainPageReducer,
  userReducer,
})

export default rootReducer
