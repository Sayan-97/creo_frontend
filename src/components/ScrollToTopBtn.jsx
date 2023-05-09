import React, { useState } from 'react'

import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollToTopBtn = () => {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 800) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button onClick={handleClick} className={`fixed right-[5%] lg:right-14 ${showButton ? 'bottom-10 opacity-1' : '-bottom-10 opacity-0'} transition-all duration-500 ease-in-out bg-gradient p-[1px] rounded-full z-50`}>
            <p className='text-xl p-2'><AiOutlineArrowUp /></p>
        </button>
    )
}

export default ScrollToTopBtn