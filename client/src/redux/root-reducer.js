import { combineReducers } from 'redux'
import mainPageReducer from './main-page-data/main-page.reducer'
import userReducer from './user/user.reducer'
import profileReducer from './profile/profile.reducer'

const rootReducer = combineReducers({
  mainPageReducer,
  userReducer,
  profileReducer,
})

export default rootReducer
