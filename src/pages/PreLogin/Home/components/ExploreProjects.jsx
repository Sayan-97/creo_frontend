import React, {useState} from 'react'

import Card1 from '../../../../assets/img/explorePic1.png'
import Card2 from '../../../../assets/img/explorePic2.png'
import Card3 from '../../../../assets/img/explorePic3.png'
import Card4 from '../../../../assets/img/explorePic4.png'
import Card5 from '../../../../assets/img/explorePic5.png'
import Card6 from '../../../../assets/img/explorePic6.png'
import avatar from '../../../../assets/img/profile1.png'

const ExploreProjects = () => {

    const [activeList, setActiveList] = useState('DEVELOPERS')

    const items = [
        {
            imgSrc: Card1,
            title: 'Game Tester',
            des: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis.',
            avatar: avatar,
            name: 'John Doe',
            created_At: '1 Day Ago',
            category: 'DEVELOPERS'
        },
        {
            imgSrc: Card2,
            title: 'Video Editor',
            des: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis.',
            avatar: avatar,
            name: 'Mia James',
            created_At: '1 Day Ago',
            category: 'DEVELOPERS'
        },
        {
            imgSrc: Card3,
            title: 'Game Developer',
            des: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis.',
            avatar: avatar,
            name: 'Jason Doe',
            created_At: '1 Day Ago',
            category: 'DEVELOPERS'
        },
        {
            imgSrc: Card4,
            title: 'Game Designer',
            des: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis.',
            avatar: avatar,
            name: 'Jason Doe',
            created_At: '1 Day Ago',
            category: 'DESIGNERS'
        },
        {
            imgSrc: Card5,
            title: 'Content Writer',
            des: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis.',
            avatar: avatar,
            name: 'Jason Doe',
            created_At: '1 Day Ago',
            category: 'DESIGNERS'
        },
        {
            imgSrc: Card6,
            title: 'Copywriter',
            des: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis.',
            avatar: avatar,
            name: 'Jason Doe',
            created_At: '1 Day Ago',
            category: 'DESIGNERS'
        },
    ]

    const filteredData = items.filter((item) => item.category === activeList)

    return (
        <div className='container grid justify-items-center gap-8'>
            <div className='space-y-4 grid justify-items-center'>
                <span className='text-xl uppercase font-semibold bg-gradient text-transparent bg-clip-text'>Explore Projects</span>
                <h3 className='text-center leading-snug'>Meet Our Game {activeList === 'DEVELOPERS' ? 'Dev' : 'Design'}<br /> Experts</h3>
                <div className='bg-gradient h-1 w-20'></div>
            </div>
            <div className='flex gap-8'>
                {['DEVELOPERS', 'DESIGNERS'].map((item, index) => {
                    return(
                        <button key={index} onClick={() => setActiveList(item)} className='bg-gradient p-[1px] rounded-button'><p className={`${item === activeList ? 'bg-gradient' : 'bg-background'} w-32 md:w-40 py-2 rounded-button`}>{item}</p></button>
                    )
                })}
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredData.map((item, index) => {
                    return (
                        <div key={index} className='rounded-card bg-[#171717]'>
                            <img src={item.imgSrc} alt="img" className='rounded-t-xl' />
                            <div className='p-3 flex flex-col gap-5'>
                                <div className='grid gap-3'>
                                    <h5>{item.title}</h5>
                                    <p className='text-lg'>{item.des}</p>
                                </div>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={item.avatar} alt="img" className='w-[20%]' />
                                        <h6>{item.name}</h6>
                                    </div>
                                    <div>
                                        <p className='text-base'>{item.created_At}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExploreProjects