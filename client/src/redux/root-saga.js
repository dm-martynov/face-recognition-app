import { all, call, fork } from 'redux-saga/effects'

import { mainPageSagas } from './main-page-data/main-page.sagas'
import { userSagas } from './user/user.sagas'

function* rootSaga() {
  yield all([call(mainPageSagas), fork(userSagas)])
}
export default rootSaga
