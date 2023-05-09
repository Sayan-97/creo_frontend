import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import { Popover, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'

import User from '../../../assets/svg/user.svg'
import Sms from '../../../assets/svg/sms.svg'
import Notification from '../../../assets/svg/notification.svg'

const Client = () => {

    // Client Links
    const clientLinks = [
        {
            label: 'Jobs',
            dropdown: [
                { name: 'Post a Job', link: '/client/jobs/post-job' },
                { name: 'My Jobs', link: '/client/jobs/my-jobs' },
                { name: 'My Proposals', link: '/client/jobs/my-proposals' },
            ]
        },
        {
            label: 'Talent',
            dropdown: [
                { name: 'Hire Developers', link: '/client/hire-developers' },
                { name: 'Hire Designers', link: '/client/hire-designers' },
            ]
        },
        {
            label: 'Reports',
            dropdown: [
                { name: 'Weekly Summery', link: '/client/reports/weekly-summery' },
                { name: 'Transaction History', link: '/client/transaction-history' },
                { name: 'Timesheet', link: '/client/timesheet' },
            ]
        },
    ];

    const client = [
        {
            name: 'Dashboard',
            link: '/client/dashboard'
        },
        {
            name: 'Settings',
            link: '/client/settings'
        },
        {
            name: 'Log Out',
            link: '/'
        }
    ]

    return (
        <>
            <ul className='capitalize ml-10 flex gap-6'>
                {
                    clientLinks.map((item, index) => (
                        item.dropdown
                            ? <Popover key={index} className="relative">
                                {({ open, close }) => (
                                    <>
                                        <Popover.Button as='a' className={`cursor-pointer flex items-center ${open ? 'text-secondary' : ''} hover:text-secondary transition-all duration-200 ease-in-out`}>
                                            <p className='text-xl'>{item.label}</p>
                                            <IoIosArrowDown
                                                className={`${open ? 'rotate-180 text-secondary' : ''} text-xl mx-1 hover:text-secondary `}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen min-w-[200px] max-w-max -translate-x-1/2 transform">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20">
                                                    <div className="relative bg-accent2 p-2">
                                                        {
                                                            item.dropdown.map((dropdownItem, dropdownindex) => (
                                                                <Link key={dropdownindex} to={dropdownItem.link} onClick={close}>
                                                                    <div className='text-base font-medium text-white hover:bg-[#575757] rounded-md p-2 transition-all ease-in-out duration-150'>
                                                                        {dropdownItem.name}
                                                                    </div>
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            : <Link key={index} to={item.link}>
                                <div className='text-white hover:!text-[#A334FF] text-base font-semibold transition-all ease-in-out duration-150 py-2 xl:py-0 xl:px-4'>{item.label}</div>
                            </Link>
                    ))
                }
            </ul>
            <div className='flex items-center gap-10'>
                <div className='bg-gradient p-[1px] rounded-button relative'>
                    <input type="search" placeholder='Search Here' className='py-1 pl-8 w-[350px] bg-background rounded-button text-white text-lg' />
                    <FiSearch className='absolute top-[50%] translate-y-[-50%] left-2 text-lg text-textGray' />
                </div>
                <div className='flex items-center gap-3'>

                    <Link>
                        <button className='w-11 h-11 rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                            <img src={Sms} alt="img" />
                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0 -right-0'></div>
                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0 -right-0 animate-ping'></div>
                        </button>
                    </Link>

                    <Link>
                        <button className='w-11 h-11 rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                            <img src={Notification} alt="img" />
                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0 -right-0'></div>
                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0 -right-0 animate-ping'></div>
                        </button>
                    </Link>

                    <Popover className='relative'>
                        {({ open, close }) => (
                            <>
                                <Popover.Button>
                                    <div className='w-11 h-11 rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                        <img src={User} alt="img" />
                                    </div>
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen min-w-[200px] max-w-max -translate-x-1/2 transform">
                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20">
                                            <div className="relative bg-accent2 p-2">
                                                {
                                                    client.map((item, index) => (
                                                        <Link key={index} to={item.link} onClick={close}>
                                                            <div className='text-base font-medium text-white hover:bg-[#575757] rounded-md p-2 transition-all ease-in-out duration-150'>
                                                                {item.name}
                                                            </div>
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>
            </div>
        </>
    )
}

export default Client