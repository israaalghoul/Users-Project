import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'

import Users from './pages/Users'
import Signin from './pages/Signin'
import UserDetailes from './pages/UserDetailes'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {

  return (
    <>

<Header/>
<Routes>
  <Route path='/' element={<Home/>} />

  <Route path='/users' element={<Users/>} />
  <Route path='/signin' element={<Signin/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/users/:id' element={<UserDetailes/>} />
</Routes>

    </>
  )
}

export default App
