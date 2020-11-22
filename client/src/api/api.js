import axios from 'axios'

export const signUpRequest = async (name, email, password) => {
  try {
    const response = await axios.post('api/register', {
      name: name,
      email: email,
      password: password,
    })
    return response
  } catch (error) {
    alert(error)
  }
}

export const signOutRequest = () => {}

export const signInRequest = async (email, password) => {
  try {
    const response = await axios.post('api/signin', {
      email: email,
      password: password,
    })

    return response
  } catch (error) {
    alert(error)
  }
}

export const userUpdateRequest = async (userId) => {
  try {
    const response = await axios.put(`api/image/`, {
      userId: userId,
    })
    return response
  } catch (error) {
    alert(error)
  }
}
