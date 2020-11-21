import { takeLatest, put, all, call } from 'redux-saga/effects'
import { signUpRequest, signInRequest, userUpdateRequest } from '../../api/api'
import {
  signInStart,
  userUpdateSuccess,
  userOperationFailure,
  userOperationSuccess,
} from './user.actions'
import UserActionTypes from './user.types'

export function* signIn({ payload: { email, password } }) {
  try {
    const result = yield signInRequest(email, password)
    yield put(userOperationSuccess(result.data))
  } catch (error) {
    yield put(userOperationFailure(error))
  }
}

export function* signUp({ payload: { name, email, password } }) {
  try {
    yield signUpRequest(name, email, password)
    yield put(signInStart({ email, password }))
  } catch (error) {
    yield put(userOperationFailure(error))
  }
}

export function* userUpdate({ payload }) {
  try {
    const result = yield userUpdateRequest(payload)
    yield put(userUpdateSuccess(result.data))
  } catch (error) {
    yield put(userOperationFailure(error))
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export function* onUserUpdateStart() {
  yield takeLatest(UserActionTypes.USER_UPDATE_START, userUpdate)
}

export function* userSagas() {
  yield all([call(onSignUpStart), call(onSignInStart), call(onUserUpdateStart)])
}
