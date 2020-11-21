const { default: MainPageActionTypes } = require('./main-page.types')

const INITIAL_STATE = {
  error: null,
  imageUrl: null,
  box: null,
}

const mainPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MainPageActionTypes.FACE_RECOGNITION_START:
      return {
        ...state,
        imageUrl: action.payload.urlInput,
        error: null,
        box: null,
      }
    case MainPageActionTypes.FACE_RECOGNITION_SUCCESS:
      return {
        ...state,
        box: action.payload,
        error: null,
      }

    case MainPageActionTypes.FACE_RECOGNITION_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case MainPageActionTypes.CLEAR_FACES_DATA:
      return {
        ...state,
        error: null,
        imageUrl: null,
        box: null,
      }

    default:
      return state
  }
}

export default mainPageReducer
