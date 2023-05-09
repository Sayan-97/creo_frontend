import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AsClient, AsFreelancer, Home, SignIn, SignUp } from '../pages/PreLogin'

const PreLoginRoutes = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path='/' element={<Home />}/>

      {/* SignUp Pages */}
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/signup/as-freelancer' element={<AsFreelancer />}/>
      <Route path='/signup/as-client' element={<AsClient />}/>

      {/* SignIn Routes */}
      <Route path='/login' element={<SignIn />}/>
    </Routes>
  )
}

export default PreLoginRoutes