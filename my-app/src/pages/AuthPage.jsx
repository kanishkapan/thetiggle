import React from 'react'
import Login from '../components/Login/Login'
import Signup from '../components/Login/Signup'
import TiggleNavbar from '../components/Navbar/tiggleNavbar'

const AuthPage = () => {
  return (
    <div>

   <TiggleNavbar/>
        <Login/>
        <Signup/>
    </div>
  )
}

export default AuthPage