import React from 'react'
import { useDispatch } from 'react-redux'
import Logo from '../../components/Logo/Logo'
import ParticlesComponent from '../../components/Particles/Particles'
import SignInForm from '../../components/SignInForm/SignInForm'

const SignInPage = () => {
  const dispatch = useDispatch()
  return (
    <>
      <ParticlesComponent />
      <div className='mt4'>
        <Logo />
      </div>
      <SignInForm />
    </>
  )
}

export default SignInPage
