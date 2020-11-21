import UserActionTypes from './user.types'

export const signInStart = (userData) => {
  return {
    type: UserActionTypes.SIGN_IN_START,
    payload: userData,
  }
}
export const signUpStart = (userData) => {
  return {
    type: UserActionTypes.SIGN_UP_START,
    payload: userData,
  }
}

export const updateUserStart = (id) => {
  return {
    type: UserActionTypes.UPDATE_USER_START,
    payload: id,
  }
}
export const updateUserSuccess = (entries) => {
  return {
    type: UserActionTypes.UPDATE_USER_SUCCESS,
    payload: entries,
  }
}

export const userOperationSuccess = (userData) => ({
  type: UserActionTypes.USER_OPERATION_SUCCESS,
  payload: userData,
})

export const userOperationFailure = (error) => ({
  type: UserActionTypes.USER_OPERATION_FAILURE,
  payload: error,
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
})

export const signOut = () => ({
  type: UserActionTypes.SIGN_OUT,
})
