import axios from 'axios'

export const signUpRequest = (displayName, email, password) => {}

export const signOutRequest = () => {}

export const signInRequest = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/signin', {
      email: email,
      password: password,
    })

    console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
}
