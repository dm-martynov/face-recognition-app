import React from 'react'
import { useSelector } from 'react-redux'
import './FaceRecognition.css'

const FaceRecognition = () => {
  const imageUrl = useSelector((state) => state.mainPageReducer.imageUrl)
  const faces = useSelector((state) => state.mainPageReducer.box)

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img
          alt=''
          id='inputimage'
          width='500px'
          height='auto'
          src={imageUrl}
        />
        {faces
          ? faces.map((face) => {
              return (
                <div
                  className='bounding-box'
                  style={{
                    top: face.topRow,
                    right: face.rightCol,
                    bottom: face.bottomRow,
                    left: face.leftCol,
                  }}
                ></div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default FaceRecognition
