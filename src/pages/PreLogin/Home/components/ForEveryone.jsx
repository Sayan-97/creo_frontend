import React, {useState} from 'react'

import ETHImage from '../../../../assets/img/eth-coins.png'
import CtrlImg from '../../../../assets/img/controller.png'

import AIBgImg from '../../../../assets/img/aiPoweredBg.png'
import LearnBgImg from '../../../../assets/img/learnImgBg.png'

const ForEveryone = () => {

    return (
        <div id='whycreo' className='container grid justify-items-center gap-8'>
            <div className='space-y-2 grid justify-items-center'>
                <span className='text-xl uppercase font-semibold bg-gradient text-transparent bg-clip-text'>for everyone</span>
                <h3 className='text-center'>Why Choose Creo</h3>
                <div className='bg-gradient h-1 w-20'></div>
            </div>

            <p className='lg:w-[80%] text-base text-center'>If you're looking for a trustworthy and efficient freelance marketplace, Creo Network is the platform for you. With our use of blockchain technology and AI algorithms, we ensure secure transactions and the perfect match for freelancers and employers.</p>

            <div className='flex gap-8'>
                {['Find Work', 'Find Talent'].map((item, index) => {
                    return (
                        <button key={index} className='bg-gradient p-[1px] rounded-button'><p className={`${item === 'Find Talent' ? 'bg-background': ''} w-32 py-2 rounded-button`}>{item}</p></button>
                    )
                })}
            </div>

            <div className='w-full grid grid-rows-2 grid-cols-2 lg:grid-cols-7 gap-3 mt-10'>

                <div className='relative bg-[#171717] rounded-xl row-span-2 col-span-2 md:col-span-2 lg:col-span-3 grid z-10 overflow-hidden p-[20px]'>
                    <div className='absolute w-[25%] h-[25%] top-[20%] left-[15%] z-[-1]' style={{ background: 'rgba(51, 94, 187, 0.7)', filter: 'blur(87px)' }}></div>
                    <div className='absolute w-[25%] h-[25%] top-[40%] right-[10%] z-[-1]' style={{ background: 'rgba(62, 210, 248, 0.33)', filter: 'blur(87px)' }}></div>
                    <p className='text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text uppercase lg:text-md font-extrabold sm:text-base' style={{ backgroundSize: '35% 100%' }}>secure payments</p>
                    <img src={ETHImage} alt="img" className='w-[70%]' />
                    <h1 className='text-white font-outfit font-extrabold text-4xl leading-normal'>Secured by Blockchain Technology for Seamless Payments.</h1>
                </div>

                <div className='relative bg-[#171717] rounded-xl row-span-1 col-span-2 md:col-span-2 lg:col-span-4 grid p-[20px] z-10 overflow-hidden'>
                    <div className='absolute w-[40%] h-[40%] right-[20%]' style={{ background: 'rgba(197, 27, 206, 0.43)', filter: 'blur(117px)' }}></div>
                    <div className='absolute w-[40%] h-[40%] right-[10%] bottom-0' style={{ background: 'rgba(62, 210, 248, 0.33)', filter: 'blur(107px)' }}></div>
                    <p className='text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text uppercase lg:text-md font-extrabold sm:text-base' style={{ backgroundSize: '40% 100%' }}>exclusively for gamers</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center space-x-10'>
                        <h1 className='text-white font-outfit font-extrabold text-3xl leading-normal'>Worlds First Web 3 Marketplace for Gamers.</h1>
                        <img src={CtrlImg} alt="img" className='w-[80%]' />
                    </div>
                </div>

                <div className='relative bg-[#171717] rounded-xl row-span-1 col-span-2 md:col-span-1 lg:col-span-2 px-2 pt-2 pb-[40%] lg:p-[20px] z-10 overflow-hidden'>
                    <img src={AIBgImg} alt="img" className='absolute bottom-0 right-0' />
                    <p className='inline-block text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-left uppercase lg:text-md font-extrabold sm:text-base mt-0'>ai powered</p>
                    <h1 className='text-white font-outfit font-extrabold text-3xl leading-normal mt-4'>Future Proof With AI Technology.</h1>
                </div>

                <div className='bg-[#171717] rounded-xl row-span-1 col-span-2 md:col-span-1 lg:col-span-2 px-2 pt-2 pb-[40%] lg:p-[20px] relative z-10'>
                    <img src={LearnBgImg} alt="img" className='absolute bottom-0 right-0' />

                    <p className='inline-block text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-left uppercase lg:text-md font-extrabold sm:text-base mt-0'>Learn</p>
                    <h1 className='text-white font-outfit font-extrabold text-3xl leading-normal mt-4'>Lean and Grow with Fresh Talents.</h1>

                </div>

            </div>
        </div>
    )
}

export default ForEveryone