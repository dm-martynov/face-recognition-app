import React from 'react'
import { useSelector } from 'react-redux'

import './Rank.css'

const Rank = () => {
  const currentUser = useSelector((state) => state.userReducer.currentUser)
  return (
    <div>
      <div className='white f3'>{`${currentUser.name}, your current rank is`}</div>
      <div className='white f1'>{`${currentUser.rank}`}</div>
    </div>
  )
}

export default Rank
