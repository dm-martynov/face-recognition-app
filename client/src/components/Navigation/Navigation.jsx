import React from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from '../../redux/user/user.actions'

const Navigation = () => {
  const dispatch = useDispatch()
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        onClick={() => dispatch(signOut())}
        className='f3 link, dim black underline pa3 pointer'
      >
        Sign out
      </p>
    </nav>
  )
}

export default Navigation
