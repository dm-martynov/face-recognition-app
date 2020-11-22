import React from 'react'
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition'
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm'
import Logo from '../../components/Logo/Logo'
import Navigation from '../../components/Navigation/Navigation'
import ParticlesComponent from '../../components/Particles/Particles'
import Rank from '../../components/Rank/Rank'

function MainPage() {
  return (
    <div className='App'>
      <Navigation />
      <ParticlesComponent />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  )
}

export default MainPage
