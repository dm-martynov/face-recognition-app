import './App.css'
import React from 'react'
import MainPage from './pages/MainPage/MainPage'
import SignInPage from './pages/SignInPage/SignInPage'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'

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
        <Route
          exact
          path='/signin'
          render={() => (!currentUser ? <SignInPage /> : <Redirect to='/' />)}
        />
        <Route
          exact
          path='/register'
          render={() =>
            !currentUser ? <RegistrationPage /> : <Redirect to='/' />
          }
        />
      </Switch>
    </div>
  )
}

export default App
