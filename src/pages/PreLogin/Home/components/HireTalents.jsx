import React from 'react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import avatar from '../../../../assets/img/profile1.png';

import { HiOutlineEye, HiOutlineThumbUp } from "react-icons/hi";
import UIUX from '../../../../assets/img/category1.png';
import Graphics from '../../../../assets/img/category2.png';
import Content from '../../../../assets/img/category3.png';
import Development from '../../../../assets/img/category4.png';
import Blockchain from '../../../../assets/img/category5.png';
import App from '../../../../assets/img/category6.png';

const HireTalents = () => {

    const TeamArray = [
        { name: 'Topobar Layek', title: 'UI/UX Designing', avatar: avatar, image: UIUX, likes: '4.5k', views: '109' },
        { name: 'Mason Jane', title: 'Graphics Designing', avatar: avatar, image: Graphics, likes: '4.5k', views: '109' },
        { name: 'John Doe', title: 'Content Writing', avatar: avatar, image: Content, likes: '4.5k', views: '109' },
        { name: 'Topobar Layek', title: 'Development', avatar: avatar, image: Development, likes: '4.5k', views: '109' },
        { name: 'Mason Jane', title: 'Blockchain Development', avatar: avatar, image: Blockchain, likes: '4.5k', views: '109' },
        { name: 'John Doe', title: 'App Development', avatar: avatar, image: App, likes: '4.5k', views: '109' }
    ]

    return (
        <div id='findtalent' className='w-full flex flex-col items-center relative'>
            <div className='w-full flex flex-col items-center gap-4'>
                <span className='text-xl uppercase font-semibold bg-gradient text-transparent bg-clip-text'>HIRE CREATIVE TALENTS</span>
                <h3>Meet our Creative Designers</h3>
                <div className='w-[100px] h-[5px] bg-gradient-to-r from-cyan-400 to-purple-500'></div>

                <div className='w-full mt-10 mb-10'>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        freeMode={true}
                        // centeredSlides={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        navigation={{ nextEl: "#swiper1-next", prevEl: "#swiper1-prev" }}
                        pagination={{ clickable: true }}
                    >
                        {
                            TeamArray.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='relative w-full h-64 sm:h-72 bg-cover bg-no-repeat bg-center rounded-3xl overflow-hidden' style={{ backgroundImage: `url(${item.image})` }}>
                                        <div className='absolute bottom-0 w-full bg-white/20 backdrop-blur-lg drop-shadow-lg p-[20px] space-y-1'>
                                            {/* avatar image */}
                                            <div className='inline-block w-20 -mt-16 p-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500'>
                                                <img src={item.avatar} alt="img" className='rounded-full object-cover' />
                                            </div>

                                            {/* info with name */}
                                            <h3 className='text-white text-lg sm:text-xl font-bold'>{item.name}</h3>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-white'>{item.title}</p>

                                                <div className='flex items-center space-x-4 text-white text-sm'>
                                                    <div className='flex items-center space-x-2'>
                                                        <HiOutlineThumbUp className='w-6 h-auto' />
                                                        <p>{item.likes}</p>
                                                    </div>
                                                    <div className='flex items-center space-x-2'>
                                                        <HiOutlineEye className='w-6 h-auto' />
                                                        <p>{item.views}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                {/* button */}
                <button className='bg-gradient px-5 py-2 rounded-button'>View More</button>

            </div>
        </div>
    )
}

export default HireTalents