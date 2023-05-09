import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { FindWork, Settings } from '../pages/Freelancer'

const FreelancerRoutes = () => {
  return (
    <Routes>
      {/* Find Work Page */}
      <Route path='/freelancer/find-work' element={<FindWork />}/>

      {/* Settings Page */}
      <Route path='/freelancer/settings' element={<Settings />}/>
    </Routes>
  )
}

export default FreelancerRoutes