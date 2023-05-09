import React, {useState} from 'react'

import { GetPaid, PasswordAndSecurity, NotificationSettings, MembershipAndConnects } from './components';

const Settings = () => {

    const settings = ['Membership & Connects', 'Get Paid', 'Password & Security', 'Notification Settings'];

    const [selectedView, _selectedView] = useState('Membership & Connects');

    return (
        <div className='container flex flex-col'>
            <div className='w-full z-10'>
                {/* title */}
                <div className='grid grid-cols-12 mb-4'>
                    <div className='col-span-12 lg:col-span-3'>
                        <h5 >Settings</h5>
                    </div>
                    <div className='hidden lg:block col-span-9'>
                        <h5 >{selectedView}</h5>
                    </div>
                </div>
                {/* tabs - only for small screens */}
                <div className='lg:hidden mb-6'>
                    <div className='flex flex-wrap items-center'>
                        {
                            settings.map((item, index) => (
                                <div className='bg-gradient p-[1px] mr-2 mb-2 rounded-button'>
                                    <div key={index} onClick={() => _selectedView(item)} class={`${selectedView === item ? 'bg-gradient text-white font-medium' : 'bg-background text-gray-300 font-normal'} flex items-center text-base lg:text-lg capitalize px-4 py-2 rounded-button shadow hover:scale-105 transition-all ease-in-out duration-200`}>{item}</div>
                                </div>
                            ))
                        }
                    </div>
                    <h2 className='text-white text-2xl lg:text-3xl font-bold mt-4'>{selectedView}</h2>
                </div>

                {/* sidebar and sections */}
                <div className='w-full h-full bg-gradient-to-b from-[#171717] to-transparent rounded-2xl p-0.5'>
                    <div className='w-full h-full bg-[#171717] grid grid-cols-12 rounded-2xl'>
                        {/* sidebar */}
                        <div className='hidden lg:block col-span-3 border-r-4 py-14'>
                            <ul className='p-4 m-0 text-white text-lg space-y-8'>
                                {
                                    settings.map((item, index) => (
                                        <li key={index} onClick={() => _selectedView(item)} className='relative flex items-center cursor-pointer group'>
                                            {
                                                selectedView === item &&
                                                <div className='absolute -left-0.5 w-1 h-10 bg-white rounded-full'></div>
                                            }
                                            <p className={`${selectedView === item ? 'font-semibold' : 'font-light'} flex-1 pl-8 group-hover:scale-105 transition-all ease-in-out duration-150`}>{item}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* section */}
                        <div className='col-span-12 lg:col-span-9'>
                            {
                                selectedView === 'Membership & Connects'
                                    ? <MembershipAndConnects />
                                    : selectedView === 'Get Paid'
                                        ? <GetPaid />
                                        : selectedView === 'Password & Security'
                                            ? <PasswordAndSecurity />
                                            : selectedView === 'Notification Settings'
                                                ? <NotificationSettings />
                                                : <MembershipAndConnects />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings