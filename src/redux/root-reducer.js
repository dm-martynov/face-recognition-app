import { combineReducers } from 'redux'
import mainPageReducer from './main-page-data/main-page.reducer'

const rootReducer = combineReducers({ mainPageReducer })

export default rootReducer
