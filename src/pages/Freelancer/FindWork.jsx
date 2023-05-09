import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import FindWorkImg from '../../assets/img/findworkpageImg.png' 
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { TbBrandTether } from 'react-icons/tb'
import { TbClock } from 'react-icons/tb'

const FindWork = () => {

    const [activeCategory, setActiveCategory] = useState('Best Matches')

    const categories = [
        {
            title: 'UI/UX Designer needed for a Web3 Website',
            des: 'Lorem ipsum dolor sit amet consectetur. At ullamcorper consequat viverra purus sed feugiat malesuada aliquam. Amet aliquam etiam sed nunc.Morbi nisi nisl nisi dictum elementum nunc ullamcorper adipiscing tempus. Tempus nisl ultrices risus aenean nibh.',
            skills: ['UI/UX Designing', 'Web Design', 'Graphic Design'],
            proposals: '10-20',
            paymentVarified: true,
            rating: '',
            spent: '300',
            country: 'India',
            link: '/freelancer/findwork/apply',
            category: 'Best Matches'
        },
        {
            title: 'UI/UX Designer needed for a Web3 Website',
            des: 'Lorem ipsum dolor sit amet consectetur. At ullamcorper consequat viverra purus sed feugiat malesuada aliquam. Amet aliquam etiam sed nunc.Morbi nisi nisl nisi dictum elementum nunc ullamcorper adipiscing tempus. Tempus nisl ultrices risus aenean nibh.',
            skills: ['UI/UX Designing', 'Web Design', 'Graphic Design'],
            proposals: '10-20',
            paymentVarified: true,
            rating: '',
            spent: '300',
            country: 'India',
            link: '/freelancer/findwork/apply',
            category: 'Best Matches'
        },
        {
            title: 'Game Developer needed for a Web3 Gaming Website',
            des: 'Lorem ipsum dolor sit amet consectetur. At ullamcorper consequat viverra purus sed feugiat malesuada aliquam. Amet aliquam etiam sed nunc.Morbi nisi nisl nisi dictum elementum nunc ullamcorper adipiscing tempus. Tempus nisl ultrices risus aenean nibh.',
            skills: ['UI/UX Designing', 'Web Design', 'Graphic Design'],
            proposals: '10-20',
            paymentVarified: true,
            rating: '',
            spent: '300',
            country: 'India',
            link: '/freelancer/findwork/apply',
            category: 'Most Recent'
        },
        {
            title: 'Game Developer needed for a Web3 Gaming Website',
            des: 'Lorem ipsum dolor sit amet consectetur. At ullamcorper consequat viverra purus sed feugiat malesuada aliquam. Amet aliquam etiam sed nunc.Morbi nisi nisl nisi dictum elementum nunc ullamcorper adipiscing tempus. Tempus nisl ultrices risus aenean nibh.',
            skills: ['UI/UX Designing', 'Web Design', 'Graphic Design'],
            proposals: '10-20',
            paymentVarified: true,
            rating: '',
            spent: '300',
            country: 'India',
            link: '/freelancer/findwork/apply',
            category: 'Most Recent'
        },
        {
            title: 'UI Designer needed for a Web3 Website',
            des: 'Lorem ipsum dolor sit amet consectetur. At ullamcorper consequat viverra purus sed feugiat malesuada aliquam. Amet aliquam etiam sed nunc.Morbi nisi nisl nisi dictum elementum nunc ullamcorper adipiscing tempus. Tempus nisl ultrices risus aenean nibh.',
            skills: ['UI/UX Designing', 'Web Design', 'Graphic Design'],
            proposals: '10-20',
            paymentVarified: true,
            rating: '',
            spent: '300',
            country: 'India',
            link: '/freelancer/findwork/apply',
            category: 'Saved Jobs'
        },
        {
            title: 'UI Designer needed for a Web3 Website',
            des: 'Lorem ipsum dolor sit amet consectetur. At ullamcorper consequat viverra purus sed feugiat malesuada aliquam. Amet aliquam etiam sed nunc.Morbi nisi nisl nisi dictum elementum nunc ullamcorper adipiscing tempus. Tempus nisl ultrices risus aenean nibh.',
            skills: ['UI/UX Designing', 'Web Design', 'Graphic Design'],
            proposals: '10-20',
            paymentVarified: true,
            rating: '',
            spent: '300',
            country: 'India',
            link: '/freelancer/findwork/apply',
            category: 'Saved Jobs'
        },
    ]

    const filteredData = categories.filter((item) => item.category === activeCategory)

    return (
        <div className='container space-y-4'>
            <div className='bg-accent rounded-card relative'>
                <div className='py-10 pl-6 space-y-2 relative z-20'>
                    <p className='text-lg'>Good Morning Michel,</p>
                    <h4>Find Your <span className='textGrad'>Dream Job</span> Here</h4>
                </div>

                <img src={FindWorkImg} alt="img" className='absolute top-0 right-0 h-full md:w-[65%] lg:w-[50%]'/>
                <div className='absolute top-0 right-0 h-full w-full md:w-[65%] lg:w-[50%]' style={{ background: ' linear-gradient(89.73deg, #171717 0.23%, rgba(23, 23, 23, 0) 100.39%)' }}></div>
            </div>

            <div className='bg-accent w-full flex flex-col gap-4 rounded-xl pt-5 pb-10 z-10 '>
                <div className='w-full flex justify-between items-center px-6'>
                    <h5>Jobs you might like</h5>
                </div>
                <div className='w-full px-6'>
                    <ul className='w-full flex gap-5 items-start'>
                        {
                            ['Best Matches', 'Most Recent', 'Saved Jobs'].map((item, index) => {
                                return (
                                    <div className={`bg-gradient ${activeCategory === item ? 'pb-[2px]' : ''}`}>
                                        <li key={index} className={`text-lg py-2 cursor-pointer bg-[#171717]`} onClick={() => setActiveCategory(item)}>{item}</li>
                                    </div>
                                )
                            })
                        }

                    </ul>
                    <hr className='relative flex  border-divide' />
                </div>

                <div className='w-full grid gap-4 divide-y divide-divide px-10'>

                    {
                        filteredData.map((item, index) => {
                            return (
                                <Link key={index} to={item.link}>
                                    <div className='grid pt-5 gap-4 hover:bg-[#A514FC10] py-5 '>
                                        <div className='grid gap-1'>
                                            <div className='w-full flex justify-between items-center'>
                                                <h5>{item.title}</h5>
                                            </div>
                                            <div className='flex gap-5'>
                                                <p className='text-textGray flex items-center gap-1 text-lg'><TbClock /> Posted 18 Minutes Aggo</p>
                                                <p className='text-textGray flex items-center gap-1 text-lg'><TbBrandTether /> USDT 20-Fixed Price</p>
                                            </div>
                                        </div>
                                        <p className='text-lg'>{item.des}</p>
                                        <div className='flex gap-4 flex-wrap'>

                                            {
                                                item.skills.map((skill, index) => {
                                                    return (
                                                        <button disabled key={index} className='bg-gradient p-[1px] rounded-button'>
                                                            <p className='bg-accent w-44 py-2 rounded-button'>{skill}</p>
                                                        </button>
                                                    )
                                                })
                                            }

                                        </div>
                                        <p>Proposals: <span className='font-bold'>{item.proposals}</span></p>
                                        <div className='flex max-md:flex-col max-md:items-start items-center gap-5'>
                                            <div className='flex items-center gap-2'>
                                                {item.paymentVarified && (
                                                    <>
                                                        <BsFillCheckCircleFill />
                                                        <p className='text-[#FFFFFFA6]'>Payment Verified</p>
                                                    </>
                                                )}
                                            </div>
                                            <div className='flex'>
                                                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg class="w-5 h-5 text-gray-300 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            </div>
                                            <div>
                                                <p className='text-[#FFFFFFA6]'>&#x24;{item.spent} Spent</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <MdLocationOn className='text-lg' />
                                                <p className='text-[#FFFFFFA6]'>{item.country}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default FindWork
