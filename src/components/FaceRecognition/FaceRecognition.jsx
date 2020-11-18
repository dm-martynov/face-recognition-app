import React from 'react'
import { useSelector } from 'react-redux'
import './FaceRecognition.css'

const FaceRecognition = () => {
  const imageUrl = useSelector((state) => state.mainPageReducer.imageUrl)

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
      </div>
    </div>
  )
}

export default FaceRecognition
