import { takeLatest, put, all, call } from 'redux-saga/effects'
import { signOutRequest, signUpRequest, signInRequest } from '../../api/api'
import {
  signInStart,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
} from './user.actions'
import UserActionTypes from './user.types'

export function* signOut() {
  try {
    const result = yield signOutRequest()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* signIn({ payload: { email, password } }) {
  try {
    const result = yield signInRequest(email, password)
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* signUp({ payload: { name, email, password } }) {
  try {
    const result = yield signUpRequest(name, email, password)
    yield put(signInStart({ email, password }))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([call(onSignUpStart), call(onSignInStart), call(onSignOutStart)])
}
