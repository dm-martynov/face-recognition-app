import axios from 'axios'

export const signUpRequest = async (name, email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/register', {
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
    const response = await axios.post('http://localhost:5000/api/signin', {
      email: email,
      password: password,
    })

    alert(response)
    return response
  } catch (error) {
    alert(error)
  }
}

export const updateProfileRequest = async (userId) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/image/}`, {
      userId,
    })
    return response
  } catch (error) {
    alert(error)
  }
}

// export const getUserData = async (userId) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/signin', {
//       email: email,
//       password: password,
//     })

//     alert(response)
//     return response
//   } catch (error) {
//     alert(error)
//   }
// }
