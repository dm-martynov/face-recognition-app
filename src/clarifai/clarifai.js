import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: '7ce7664ce50044fd8afa34592eb44d45',
})

const detectFace = (url) => {
  app.models
    .predict(Clarifai.GENERAL_MODEL, url)
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((err) => {
      console.log(err)
    })
}

export default detectFace
