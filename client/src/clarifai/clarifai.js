import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: '7ce7664ce50044fd8afa34592eb44d45',
})

const calculateFaceLocation = (regions) => {
  const image = document.getElementById('inputimage')
  const width = Number(image.width)
  const height = Number(image.height)
  const clarifaiFaces = regions.map((region, index) => {
    return {
      leftCol: region.region_info.bounding_box.left_col * width,
      topRow: region.region_info.bounding_box.top_row * height,
      rightCol: width - region.region_info.bounding_box.right_col * width,
      bottomRow: height - region.region_info.bounding_box.bottom_row * height,
      id: index,
    }
  })

  return clarifaiFaces
}

const detectFace = (url) => {
  return app.models
    .predict('53e1df302c079b3db8a0a36033ed2d15', url)
    .then((response) => {
      console.log(response)
      return calculateFaceLocation(response.outputs[0].data.regions)
    })
    .catch((err) => {
      console.log(err)
    })
}

export default detectFace
