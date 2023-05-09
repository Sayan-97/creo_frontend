import React from 'react'

import Blockchain from '../../../../assets/img/BlockchainImg.png'
import AiImg from '../../../../assets/img/AIImage.png'
import Gamified from '../../../../assets/img/Gamified.png'

import KeyFeaturesGrad1 from '../../../../assets/gradients/KeyFeaturesGrad1.png'
import KeyFeaturesGrad2 from '../../../../assets/gradients/KeyFeaturesGrad5.png'
import KeyFeaturesGrad3 from '../../../../assets/gradients/KeyFeaturesGrad3.png'

const KeyFeatures = () => {

    const CardsArray = [
        { grad: KeyFeaturesGrad1, image: Blockchain, tag: 'SECURED', title: 'Backed up by Blockchain.', desc: 'Blockchain technology, known for its transparency, security, and decentralized nature, is revolutionizing industries by providing unprecedented opportunities for innovation, trust, and efficiency, paving the way for a more decentralized and interconnected future.' },
        { grad: KeyFeaturesGrad2, image: AiImg, tag: 'SMART', title: 'Powered by AI Technology.', desc: 'Creo Network, powered by advanced artificial intelligence (AI) technology, empowers users with intelligent algorithms, data-driven insights, and automated processes, enabling them to unlock new levels of productivity, creativity, and success in their endeavors.' },
        { grad: KeyFeaturesGrad3, image: Gamified, tag: 'FOR GAMERS', title: 'Gamified Experience.', desc: 'Creo Network offers a gamified experience, engaging users with interactive challenges, rewards, and achievements, creating an immersive and enjoyable environment that motivates and inspires them to excel in their pursuits.' }
    ]

    return (
        <div className='container grid justify-items-center gap-8'>
            <div className='space-y-2 grid justify-items-center'>
                <span className='text-xl uppercase font-semibold bg-gradient text-transparent bg-clip-text'>Key Features</span>
                <h3 className='text-center leading-snug'>Meet the Most Powerful<br /> Web 3 Marketplace </h3>
                <div className='bg-gradient h-1 w-20'></div>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    CardsArray.map((item, index) => (
                        <div key={index} className='relative overflow-hidden'>

                            <div className='relative w-full h-full rounded-xl z-10 text-start pb-5 bg-[#171717] grid justify-items-center px-6 py-4'>

                                <img className='absolute z-[-2] bottom-28 w-[100%] h-[100%] object-cover opacity-60' src={item.grad} alt="img" />
                                <img className='block w-[70%] h-[250px] mb-5' src={item.image} alt="img" />
                                <div className='flex flex-col mt-2 justify-start gap-4'>
                                    <p className='text-[#B1B1B1] w-[90%] font-medium'>{item.tag}</p>
                                    <h2 className='text-white text-3xl font-bold text-left w-[70%]'>{item.title}</h2>
                                    <p className='text-[#B1B1B1] text-base'>{item.desc}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default KeyFeatures