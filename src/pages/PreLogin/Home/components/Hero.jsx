import React from 'react'

import HeroImg from '../../../../assets/img/HeroImg2.png'
import Binance from '../../../../assets/logo/binance.png'
import Dropbox from '../../../../assets/logo/dropbox.png'
import Microsoft from '../../../../assets/logo/microsoft2.png'
import Tesla from '../../../../assets/logo/tesla.png'
import Upwork from '../../../../assets/logo/upwork.png'

import HeroGrad1 from '../../../../assets/gradients/HeroGrad-1.png'
import HeroGrad2 from '../../../../assets/gradients/HeroGrad-2.png'

const Hero = () => {

    const TrustedArray = [Microsoft, Binance, Tesla, Upwork, Dropbox];

    return (
        <div className='relative'>
            <img src={HeroGrad1} alt="img" className='absolute -top-[60%] -left-[10%] z-[-1] opacity-60'/>
            <img src={HeroGrad2} alt="img" className='absolute -bottom-[2%] md:-bottom-[10%] md:right-[5%] lg:-right-[5%] lg:-top-[45%] z-[-1] opacity-60'/>
            <div className='container flex max-lg:flex-col z-10'>
                <div className='flex flex-col justify-center gap-6 lg:w-[55%]'>
                    <h1>AI Powered Marketplace<br /> for Gamers.</h1>
                    <p className='text-lg'>Welcome to the future of game development with our cutting-edge gamelancer marketplace that leverages the power of artificial intelligence (AI) and blockchain technology! Our platform brings together talented game developers from around the world, providing a seamless and secure environment for them to connect, collaborate, and create the next generation of games.</p>
                    <div className='flex items-center gap-4'>
                        <button className='bg-gradient p-[1px] rounded-button'><p className='bg-gradient rounded-button w-32 py-2'>Find Work</p></button>
                        <button className='bg-gradient p-[1px] rounded-button'><p className='bg-background rounded-button w-32 py-2'>Find Talent</p></button>
                    </div>
                    <div className='space-y-2'>
                        <h6>Trusted By</h6>
                        <div className='flex flex-wrap items-center'>
                            {
                                TrustedArray.map((item, index) => (
                                    <div key={index} className='w-20 sm:w-24 mr-6 mb-6'>
                                        <img src={item} alt='Trusted' className='w-full h-auto' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className='lg:w-[45%]'>
                    <img src={HeroImg} alt="img" />
                </div>

            </div>
        </div>
    )
}

export default Hero