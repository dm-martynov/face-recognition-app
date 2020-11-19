import UserActionTypes from './user.types'

export const signInStart = (emailAndPassword) => {
  console.log(emailAndPassword)
  return {
    type: UserActionTypes.SIGN_IN_START,
    payload: emailAndPassword,
  }
}

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
})

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
})

export const signOutSuccess = () => {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  }
}

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
})

export const signUpStart = (userData) => {
  return {
    type: UserActionTypes.SIGN_UP_START,
    payload: userData,
  }
}

export const signUpSuccess = (user) => {
  return {
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user,
  }
}

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
})
