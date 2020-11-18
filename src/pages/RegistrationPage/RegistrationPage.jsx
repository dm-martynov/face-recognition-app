import React from 'react'
import Logo from '../../components/Logo/Logo'
import ParticlesComponent from '../../components/Particles/Particles'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

const RegistrationPage = () => {
  return (
    <>
      <ParticlesComponent />
      <div className='mt4'>
        <Logo />
      </div>
      <RegistrationForm />
    </>
  )
}

export default RegistrationPage
