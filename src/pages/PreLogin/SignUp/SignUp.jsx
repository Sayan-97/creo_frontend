import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from '../../../assets/img/metachar.png'
import Img2 from '../../../assets/img/metachar2.png'

const SignUp = () => {

    const links = [
        { img: Img1, title: `I am a Gamelancer looking for Gaming work`, link: '/signup/as-freelancer' },
        { img: Img2, title: 'I’m a Client looking to Hire Talents', link: '/signup/as-client' },
    ]

    return (
        <div className='container grid justify-items-center gap-8'>
            <h3>Join as a <span className='textGrad'>Client</span> or a <span className='textGrad'>Freelancer</span></h3>
            <div className='grid md:grid-cols-2 gap-8'>
                {links.map((item, index) => {
                    return(
                        <Link to={item.link} className={`hover:scale-105 transition-all ease-in-out`}>
                            <div key={index} className='bg-accent px-6 py-4 rounded-card space-y-4 grid justify-items-center h-full'>
                                <img src={item.img} alt="img" className='w-80'/>
                                <h5 className='text-center' >{item.title}</h5>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <p className='text-lg'>Create Account</p>
            <p className='text-lg'>Already have a account? <Link to={`/login`} className={`hover:text-secondary hover:font-semibold transition-all ease-in-out`}>Log In</Link></p>
        </div>
    )
}

export default SignUp