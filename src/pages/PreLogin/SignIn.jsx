import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='container grid justify-items-center'>
            <form action="" className='bg-accent py-8 px-2 md:px-20 md:py-16 space-y-10 rounded-card lg:w-[50%]'>

                <div className='flex justify-center'>
                    <h4>Log In to <span className='textGrad'>Creo Network</span></h4>
                </div>

                {/* Username */}
                <div className='space-y-1'>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='Enter your username' className='w-full'/>
                </div>

                {/* Password */}
                <div className='space-y-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter your password' className='w-full'/>
                    <p className='text-base'>Forgot Password?</p>
                </div>

                {/* Button */}
                <div className='flex justify-center'>
                    <button className='bg-gradient px-5 py-2 rounded-button'>Log In</button>
                </div>

                <div className='flex justify-center'>
                    <Link to='/signup' className='hover:text-secondary transition-all ease-in-out'>Want to become a part of Creo Network?</Link>
                </div>

            </form>
        </div>
    )
}

export default SignIn