import React from 'react'
import { Link } from 'react-router-dom'

import { MdFacebook } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'

const PreLogin = () => {

    const links = [
        { label: 'find work', link: '#' },
        { label: 'find talent', link: '#' },
        { label: 'why creo?', link: '#' },
    ]

    const socials = [
        { icon: <MdFacebook />, link:'/' },
        { icon: <AiFillLinkedin />, link:'/' },
        { icon: <FaDiscord />, link:'/' },
        { icon: <AiOutlineTwitter />, link:'/' },
    ]

    return (
        <>
            <ul className='capitalize md:ml-10 flex gap-6'>
                {links.map((item, index) => {
                    return (
                        <a key={index} href={item.link} className='hover:text-secondary transition-all duration-200 ease-in-out'>{item.label}</a>
                    )
                })}
            </ul>
            <div className='flex gap-4'>
                {socials.map((item, index) => {
                    return(
                        <Link key={index} to={item.link}>
                            <div className='bg-gradient p-0.5 rounded-full'>
                                <p className='p-2 bg-background rounded-full'>{item.icon}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default PreLogin