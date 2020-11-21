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
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, id: action.payload },
        error: null,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
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
