import React from 'react'
import { useSelector } from 'react-redux'
import './SignIn.css'

const SignIn = () => {
  const imageUrl = useSelector((state) => state.mainPageReducer.imageUrl)
  const faces = useSelector((state) => state.mainPageReducer.box)

  return <div className='center ma'></div>
}

export default SignIn
