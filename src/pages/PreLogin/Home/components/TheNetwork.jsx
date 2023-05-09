import React from 'react'

import avatar from '../../../../assets/img/profile1.png'

const TheNetwork = () => {

    const team = [
        { proPic: avatar, name: 'Karn Chakravarty', des: 'CEO' },
        { proPic: avatar, name: 'Daniyal Sohail', des: 'CTO' },
        { proPic: avatar, name: 'Topobar Layek', des: 'Product Designer' },
        { proPic: avatar, name: 'Sayan Dey', des: 'Developer' },
        { proPic: avatar, name: 'Swatanshu Dey', des: 'Graphics' },
        { proPic: avatar, name: 'Amit Gorai', des: 'UI/UX' },
    ]

    return (
        <div className='container bg-accent rounded-card py-16 grid justify-items-center'>
            <div className='space-y-2 grid justify-items-center'>
                <span className='text-xl uppercase font-semibold bg-gradient text-transparent bg-clip-text'>the network</span>
                <h3 className='text-center leading-tight'>Meet our Team</h3>
                <div className='bg-gradient h-1 w-20'></div>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-16 w-[70%] gap-y-20'>
                {team.map((item, index) => {
                    return(
                        <div className='grid justify-items-center gap-2'>
                            <div className='bg-gradient p-[2px] rounded-full'>
                                <img src={item.proPic} alt="img" />
                            </div>
                            <h6>{item.name}</h6>
                            <p className='text-base'>{item.des}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TheNetwork