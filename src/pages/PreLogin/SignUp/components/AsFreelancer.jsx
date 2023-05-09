import React, {useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import Profile from '../../../../assets/svg/profile.svg'
import { AiOutlinePlus } from 'react-icons/ai'

import USDT from '../../../../assets/svg/USDT.svg'

import ProfileImg from '../../../../assets/img/profile-img.webp'
import BookImg from '../../../../assets/svg/book.svg'
import DollerImg from '../../../../assets/svg/dollar-circle.svg'
import BriefcaseImg from '../../../../assets/svg/briefcase.svg'
import MedalImg from '../../../../assets/svg/medal.svg'
import TeacherImg from '../../../../assets/svg/teacher.svg'

import { ExperienceModal } from '../../../../components/Modals'

import { useDispatch } from 'react-redux'
import { toggleUser } from '../../../../store/user/userSlice'

const AsFreelancer = () => {

    // ========= Image File Input ===========
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        if (onChange) {
            onChange(event.target.files);
        }
    };
    // =======================================

    // ============ Country Values ===========
    const country = ['UK', 'Russia', 'Australia', 'India']
    // =======================================

    // ============ City Values ===========
    const city = ['A', 'B', 'C', 'D']
    // =======================================

    // ============ Language Values ===========
    const languages = ['A', 'B', 'C', 'D']
    // ========================================

    // ============ Language Values ===========
    const proficiency = ['Beginner', 'Intermediate', 'Expert']
    // ========================================

    // ============ Experience Modal ===========
    const [showExp, setShowExp] = useState(false)
    const setExpModal = () => (
        setShowExp(!showExp)
    )
    // ========================================

    const dispatch = useDispatch()
    const handleSignUp = () => (
        dispatch(toggleUser('freelancer'))
    )

    return (
        <div className='container grid justify-items-center'>
            <form action="" className='bg-accent py-8 px-2 md:px-8 space-y-6 rounded-card'>

                <div className='space-y-2'>
                    <h4>Sign Up to find <span className='textGrad'>Work</span> you love</h4>
                    <p className='text-lg'>Lets get started by adding few important details and information.</p>
                </div>

                {/* Profile Details */}
                <div className='bg-gradient p-[1px] rounded-card'>
                    <div className='bg-accent px-3 py-4 rounded-card space-y-4'>

                        <div className='flex items-end gap-1'>
                            <img src={Profile} alt="img" />
                            <h6>Profile Details</h6>
                            <span className='text-textGray italic'>Required</span>
                        </div>

                        {/* Upload Profile Picture */}
                        <div className='grid justify-items-center gap-4'>
                            <img src={ProfileImg} alt="img" className='w-[40%] md:w-[30%] lg:w-[20%] rounded-full' />
                            <input
                                type='file'
                                // ref={fileInputRef}
                                // onChange={handleFileChange}
                                // style={{ display: 'none' }}
                                id='pic'
                                hidden
                            />
                            {/* <button onClick={handleClick} className={`bg-gradient pl-3 pr-4 py-2 rounded-button flex items-center gap-1`}><AiOutlinePlus /> Upload File</button> */}
                            <label htmlFor="pic" className='bg-gradient flex items-center px-5 py-2 rounded-button cursor-pointer gap-1'><AiOutlinePlus />Upload Photo</label>
                        </div>

                        {/* Username */}
                        <div className='space-y-1'>
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder='Enter your Username' className='w-full px-2' />
                        </div>

                        {/* Profile Title */}
                        <div className='space-y-1'>
                            <label htmlFor="title">Profile Title</label>
                            <input type="text" placeholder='Enter your Profile Title' className='w-full px-2' />
                        </div>

                        <div className='grid lg:grid-cols-2 gap-2'>
                            {/* Password */}
                            <div className='space-y-1'>
                                <label htmlFor="pass">Password</label>
                                <input type="password" id='pass' placeholder='Enter your password' className='w-full'/>
                            </div>

                            {/* Confirm Password */}
                            <div className='space-y-1'>
                                <label htmlFor="cnfpass">Confirm Password</label>
                                <input type="password" id='cnfpass' placeholder='Confirm your password' className='w-full' />
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2 gap-2'>
                            {/* Country */}
                            <div className='space-y-1'>
                                <label htmlFor="country">Country</label>
                                <select name="country" id="country" className='w-full'>
                                    <option value="" hidden disabled selected>Select the Country</option>
                                    {country.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            {/* City */}
                            <div className='space-y-1'>
                                <label htmlFor="city">City</label>
                                <select name="city" id="city" className='w-full'>
                                    <option value="" hidden disabled selected>Select the City</option>
                                    {city.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className='grid lg:grid-cols-2 gap-2'>
                            {/* Add Language */}
                            <div className='space-y-1'>
                                <label htmlFor="language">Add Language</label>
                                <select name="language" id="language" className='w-full'>
                                    <option value="" hidden disabled selected>Select your Language</option>
                                    {languages.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            {/* Proficiency */}
                            <div className='space-y-1'>
                                <label htmlFor="proficiency">Proficiency</label>
                                <select name="proficiency" id="proficiency" className='w-full'>
                                    <option value="" hidden disabled selected>Select your proficiency</option>
                                    {proficiency.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Professional Summery */}
                <div className='bg-gradient p-[1px] rounded-card'>
                    <div className='bg-accent px-3 py-4 rounded-card space-y-4'>

                        <div className='flex items-end gap-1'>
                            <img src={BookImg} alt="img" />
                            <h6>Professional Summery</h6>
                            <span className='text-textGray italic'>Required</span>
                        </div>

                        <div className='space-y-1'>
                            <label htmlFor="summery">
                                Write a short professional summery (3-5 sentences) about yourself and the work you do
                            </label>
                            <textarea name="summery" id="summery" placeholder='Entry a Summery'></textarea>
                        </div>

                    </div>
                </div>

                {/* Hourly Rate */}
                <div className='bg-gradient p-[1px] rounded-card'>
                    <div className='bg-accent px-3 py-4 rounded-card space-y-4'>

                        <div className='flex items-end gap-1'>
                            <img src={DollerImg} alt="img" />
                            <h6>Hourly Rate</h6>
                            <span className='text-textGray italic'>Required</span>
                        </div>

                        <p className='text-lg'>Enter the amount that you would like to charge per hour for the work that you will do</p>

                        <div className='flex max-lg:flex-col lg:items-center max-lg:gap-6 justify-between'>
                            <div>
                                <p className='text-xl font-semibold'>Hourly Rate:</p>
                                <p className='text-base'>Total amount that the client will see</p>
                            </div>

                            <div className='flex items-end gap-1'>
                                <div className='relative'>
                                    <input type="number" placeholder='0.00' className='pl-24 w-52'/>
                                    <div className='absolute bg-gradient flex items-center gap-1 p-1 rounded-button top-[50%] translate-y-[-50%] left-1'>
                                        <img src={USDT} alt="img" />
                                        <p className='text-lg'>USDT</p>
                                    </div>
                                </div>
                                <p className='text-xl'>/hr</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Add Experience */}
                <div className='bg-gradient p-[1px] rounded-card'>
                    <div className='bg-accent px-3 py-4 rounded-card space-y-4'>

                        <div className='flex items-end gap-1'>
                            <img src={BriefcaseImg} alt="img" />
                            <h6>Add Experience</h6>
                            <span className='text-textGray italic'>Required</span>
                        </div>

                        <p className='text-lg'>Add your work experience here with your most recent position</p>

                        <button onClick={setExpModal} type='button' className='flex items-center gap-1 bg-gradient px-4 py-2 rounded-button'>
                            <AiOutlinePlus />Add Experience
                        </button>

                        <ExperienceModal 
                            show={showExp}
                            setExpModal={setExpModal}
                        />

                    </div>
                </div>

                {/* Add Education */}
                <div className='bg-gradient p-[1px] rounded-card'>
                    <div className='bg-accent px-3 py-4 rounded-card space-y-4'>

                        <div className='flex items-end gap-1'>
                            <img src={TeacherImg} alt="img" />
                            <h6>Add Education</h6>
                            <span className='text-textGray italic'>Required</span>
                        </div>

                        <p className='text-lg'>Add your latest Education Qualifications here</p>

                        <button className='flex items-center gap-1 bg-gradient px-4 py-2 rounded-button'>
                            <AiOutlinePlus />Add Education
                        </button>

                    </div>
                </div>

                {/* Add Certifications */}
                <div className='bg-gradient p-[1px] rounded-card'>
                    <div className='bg-accent px-3 py-4 rounded-card space-y-4'>

                        <div className='flex items-end gap-1'>
                            <img src={MedalImg} alt="img" />
                            <h6>Add Certifications</h6>
                            <span className='text-textGray italic'>Required</span>
                        </div>

                        <p className='text-lg'>Add any accomplishments that you have achieved</p>

                        <button className='flex items-center gap-1 bg-gradient px-4 py-2 rounded-button'>
                            <AiOutlinePlus />Add Certifications
                        </button>

                    </div>
                </div>

                {/* Skills */}
                <div className='bg-gradient p-[1px] rounded-card'>
                    <div className='bg-accent px-3 py-4 rounded-card space-y-4'>

                        <div className='flex items-end gap-1'>
                            <h6>Skills</h6>
                            <span className='text-textGray italic'>Required</span>
                        </div>

                    </div>
                </div>

                {/* Checkbox's */}
                <div className='grid'>
                    <div className='space-x-2 flex items-start'>
                        <input type="checkbox" id='mail' className='h-6' />
                        <label htmlFor="mail" className='text-base'>Send me emails and announcements made on Creo Network</label>
                    </div>

                    <div className='space-x-2 flex items-start'>
                        <input type="checkbox" id='tnc' className='h-6' />
                        <label htmlFor="tnc" className='text-base'>Yes, I understand and agree to the Creo Network Terms of Service, including the User Agreement and Privacy Policy.</label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className='flex justify-center'>
                    <Link to='/freelancer/find-work'><button onClick={handleSignUp} className='bg-gradient px-6 py-2 rounded-button'>Sign Up</button></Link>
                </div>

            </form>
        </div>
    )
}

export default AsFreelancer