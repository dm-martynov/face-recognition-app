import UserActionTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_OPERATION_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      }
    case UserActionTypes.USER_UPDATE_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, entries: action.payload },
        error: null,
      }
    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case UserActionTypes.USER_OPERATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
