const { default: MainPageActionTypes } = require('./main-page.types')

const INITIAL_STATE = {
  error: null,
  image: null,
}

const mainPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MainPageActionTypes.FACE_RECOGNITION_SUCCESS:
      return {
        ...state,
        image: action.payload,
        error: null,
      }

    case MainPageActionTypes.FACE_RECOGNITION_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default mainPageReducer
