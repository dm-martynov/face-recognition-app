import { all, call } from 'redux-saga/effects'

import { mainPageSagas } from './main-page-data/main-page.sagas'

function* rootSaga() {
  yield all([call(mainPageSagas)])
}
export default rootSaga
