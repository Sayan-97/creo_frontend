import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'

const NavModal = ({ show, setNavModal }) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const navModalRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navModalRef.current && !navModalRef.current.contains(event.target) && show) {
                setNavModal(false);
            }
        };

        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show, setNavModal]);

    const links = [
        { label: 'find work', link: '#findwork' },
        { label: 'find talent', link: '#findtalent' },
        { label: 'why creo?', link: '#whycreo' },
    ]

    return(
        <div ref={navModalRef} className={`fixed w-[50%] h-full lg:hidden top-0 ${show ? 'right-0' : '-right-[100%]'} py-4 pr-2 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'hidden' : 'block'}`} style={{ backgroundColor: 'rgba(165, 20, 252, 0.2)', backdropFilter: 'blur(18px)' }}>
            <div className='container'>
                <div className='flex items-center justify-end py-4'>
                    <IoClose onClick={setNavModal} className='text-4xl'/>
                </div>

                <div className='mt-6 space-y-8'>
                    <ul className='capitalize grid justify-items-end gap-4'>
                        {links.map((item, index) => {
                            return (
                                <a key={index} href={item.link} className='hover:text-secondary transition-all duration-200 ease-in-out'>{item.label}</a>
                            )
                        })}
                    </ul>

                    <div className='grid justify-items-end gap-4'>
                        <Link to='/signup'><button className='bg-gradient p-[1px] rounded-button'><p className='w-32 py-1 rounded-button'>Sign Up</p></button></Link>
                        <Link to='/login'><button className='bg-gradient p-[1px] rounded-button'><p className='bg-background w-32 py-1 rounded-button hover:bg-gradient'>Log In</p></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavModal