import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { PreLogin } from './components'

import CreoLogo from '../../assets/logo/creo-logo.svg'

const Footer = () => {

  const userType = useSelector((state) => state.user.userType)

  return (
    <footer className='container grid mt-16'>
      <hr className='border-divide'/>
      <div className='flex max-md:flex-col max-md:gap-5 items-center py-6'>
        {/* Logo */}
        <Link to={`${userType === 'client' ? '/client/dashboard' : userType === 'freelancer' ? '/freelancer/find-work' : '/'}`}>
          <img src={CreoLogo} alt="img" className='md:w-32 lg:w-24 3xl:w-28 inline-flex' />
        </Link>

        {/* Links */}
        <div className='flex max-md:flex-col max-md:gap-4 flex-grow items-center justify-between'>
          {userType === 'client' ? (
            <></>
          ) : userType === 'freelancer' ? (
            <></>
          ) : (
            <PreLogin />
          )}
        </div>
      </div>
      <hr className='border-divide'/>
      <p className='text-textGray text-base mt-1'>2023 Creo Network all rights reserved.</p>
    </footer>
  )
}

export default Footer