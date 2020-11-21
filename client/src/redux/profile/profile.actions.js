import ProfileActionTypes from './profile.types'

export const getProfileStart = () => {
  return {
    type: ProfileActionTypes.GET_PROFILE_START,
  }
}

export const updateProfileStart = (userId) => {
  return {
    type: ProfileActionTypes.UPDATE_PROFILE_START,
    payload: userId,
  }
}

export const profileOperationSuccess = (newRank) => ({
  type: ProfileActionTypes.GET_PROFILE_SUCCESS,
  payload: newRank,
})

export const profileOperationFailure = (error) => ({
  type: ProfileActionTypes.UPDATE_PROFILE_FAILURE,
  payload: error,
})
