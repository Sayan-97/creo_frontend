import React from 'react'
import { Link } from 'react-router-dom'

const PreLogin = () => {
    const links = [
        { label: 'find work', link: '#findwork' },
        { label: 'find talent', link: '#findtalent' },
        { label: 'why creo?', link: '#whycreo' },
    ]

    return (
        <>
            <ul className='capitalize ml-10 flex gap-6'>
                {links.map((item,index) => {
                    return(
                        <a key={index} href={item.link} className='hover:text-secondary transition-all duration-200 ease-in-out'>{item.label}</a>
                    )
                })}
            </ul>
            <div className='flex gap-4'>
                <Link to='/signup'><button className='bg-gradient p-[1px] rounded-button'><p className='w-32 py-1 rounded-button'>Sign Up</p></button></Link>
                <Link to='/login'><button className='bg-gradient p-[1px] rounded-button'><p className='bg-background w-32 py-1 rounded-button hover:bg-gradient'>Log In</p></button></Link>
            </div>
        </>
    )
}

export default PreLogin