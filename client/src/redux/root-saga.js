import { all, call } from 'redux-saga/effects'

import { mainPageSagas } from './main-page-data/main-page.sagas'
import { profileSagas } from './profile/profile.sagas'
import { userSagas } from './user/user.sagas'

function* rootSaga() {
  yield all([call(mainPageSagas), call(userSagas), call(profileSagas)])
}
export default rootSaga
