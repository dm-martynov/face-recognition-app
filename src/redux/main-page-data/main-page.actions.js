import MainPageActionTypes from './main-page.types'

export const faceRecognitionStart = (imageUrl) => {
  return {
    type: MainPageActionTypes.FACE_RECOGNITION_START,
    payload: imageUrl,
  }
}

export const faceRecognitionFailure = (error) => ({
  type: MainPageActionTypes.FACE_RECOGNITION_FAILURE,
  payload: error,
})

export const faceRecognitionSuccess = (result) => ({
  type: MainPageActionTypes.FACE_RECOGNITION_SUCCESS,
  payload: result,
})
