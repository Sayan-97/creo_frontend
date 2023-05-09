import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Client, Freelancer, PreLogin } from './components'

import { FiMenu } from 'react-icons/fi'
import CreoLogo from '../../assets/logo/creo-logo.svg'

import { NavModal } from '../Modals'


const Header = () => {

  const userType = useSelector((state) => state.user.userType)

  const [show, setShow] = useState(false)
  const setNavModal = () => (
    setShow(!show)
  )

  return (
    <header className='relative z-50'>
      <nav className='container flex items-center py-2'>
        {/* Logo */}
        <Link to={`${userType === 'client' ? '/client/dashboard' : userType === 'freelancer' ? '/freelancer/find-work' : '/'}`}>
          <img src={CreoLogo} alt="img" className='md:w-32 lg:w-24 3xl:w-28 inline-flex' />
        </Link>

        {/* PC View */}

        {/* Links */}
        <div className='max-lg:hidden flex flex-grow items-center justify-between'>
          {userType === 'client' ? (
            <Client />
          ) : userType === 'freelancer' ? (
            <Freelancer />
          ) : (
            <PreLogin />
          )}
        </div>

        {/* Mobile View */}
        <div className='max-lg:flex hidden flex-grow justify-end relative'>
          <FiMenu onClick={setNavModal} className='text-4xl' />

          <NavModal
            show={show}
            setNavModal={setNavModal}
          />
        </div>
      </nav>
    </header>
  )
}

export default Header