import axios from 'axios'

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

export const detectFace = async (url) => {
  try {
    const response = await axios.post('api/imageurl', {
      url: url,
    })
    return calculateFaceLocation(response.data.outputs[0].data.regions)
  } catch (error) {
    alert(error)
  }
}
