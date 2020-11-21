import ProfileActionTypes from './profile.types'

const INITIAL_STATE = {
  name: '',
  rank: 0,
  error: null,
}

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProfileActionTypes.PROFILE_OPERATION_SUCCESS:
      return {
        ...state,
        rank: action.payload,
        error: null,
      }

    case ProfileActionTypes.PROFILE_OPERATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default profileReducer
