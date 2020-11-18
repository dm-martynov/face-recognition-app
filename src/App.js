import './App.css'
import React from 'react'
import MainPage from './pages/MainPage/MainPage'
import SignIn from './pages/SignIn/SignIn'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {
  const currentUser = useSelector((state) => state.userReducer.currentUser)
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          render={() =>
            currentUser ? <MainPage /> : <Redirect to='/signin' />
          }
        />

        <Route exact path='/signin' render={() => <SignIn />} />
      </Switch>
    </div>
  )
}

export default App
