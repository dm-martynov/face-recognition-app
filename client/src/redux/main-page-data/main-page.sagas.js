import { takeLatest, put, all, call } from 'redux-saga/effects'
import MainPageActionTypes from './main-page.types'

import {
  faceRecognitionSuccess,
  faceRecognitionFailure,
} from './main-page.actions'
import detectFace from '../../clarifai/clarifai'

export function* faceRecognition({ payload: { urlInput } }) {
  try {
    const result = yield detectFace(urlInput)
    yield put(faceRecognitionSuccess(result))
  } catch (error) {
    yield put(faceRecognitionFailure(error))
  }
}

export function* onFaceRecognitionStart() {
  yield takeLatest(MainPageActionTypes.FACE_RECOGNITION_START, faceRecognition)
}

export function* mainPageSagas() {
  yield all([call(onFaceRecognitionStart)])
}
