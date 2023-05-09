import React from 'react'
import { IoClose } from 'react-icons/io5'

const NavModal = ({ show, setNavModal }) => {

    return(
        <div className={`fixed bg-secondary w-full md:w-[50%] h-[100vh] top-0 ${show ? 'right-0' : '-right-[100%]'} py-10 z-50 transition-all duration-300 ease-in-out`}>
            <div className='px-6 w-full flex justify-end'>
                <IoClose onClick={setNavModal} className='text-5xl'/>
            </div>
        </div>
    )
}

export default NavModal