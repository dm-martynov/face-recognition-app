import { takeLatest, put, all, call } from 'redux-saga/effects'
import {
  profileOperationSuccess,
  profileOperationFailure,
} from './profile.actions'

import ProfileActionTypes from './profile.types'
import { updateProfileRequest } from '../../api/api'

export function* updateProfile(userId) {
  try {
    const newRank = yield updateProfileRequest(userId)
    yield put(profileOperationSuccess(newRank))
  } catch (error) {
    yield put(profileOperationFailure(error))
  }
}

export function* onUpdateProfileStart() {
  yield takeLatest(ProfileActionTypes.UPDATE_PROFILE_START, updateProfile)
}

export function* profileSagas() {
  yield all([call(onUpdateProfileStart)])
}
