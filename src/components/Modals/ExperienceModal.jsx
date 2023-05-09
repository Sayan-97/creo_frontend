import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { CgCloseO } from 'react-icons/cg'

const ExperienceModal = ({ show, setExpModal }) => {

    const modalRef = useRef();

    useEffect(() => {
        // Add event listener to modal overlay
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setExpModal();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setExpModal]);


    return show ? ReactDOM.createPortal(
        <>
            <div className='fixed top-0 right-0 w-[100vw] min-h-screen z-50 hide-scrollbar' style={{ background: 'rgba(0, 0, 0, 0.52)' }}>
                <form ref={modalRef} className='bg-accent w-11/12 lg:w-[50%] m-auto p-6 rounded-card mt-20'>

                    <div className='flex items-center justify-between'>
                        <h6>Add Education Qualifications</h6>
                        <CgCloseO onClick={setExpModal} className='text-xl cursor-pointer hover:rotate-90 transition-all ease-in-out duration-300' />
                    </div>

                    <div className='mt-8 grid gap-4'>

                        {/* School */}
                        <div className='space-y-1'>
                            <label htmlFor="school">School</label>
                            <input type="text" id='school' placeholder='Enter your School' className='w-full' />
                        </div>

                        {/* Degree */}
                        <div className='space-y-1'>
                            <label htmlFor="degree">Degree</label>
                            <input type="text" id='degree' placeholder='Enter your degree' className='w-full' />
                        </div>

                        <div className='grid lg:grid-cols-2 gap-2'>

                            {/* Dates Attended */}
                            <div className='space-y-1'>
                                <label htmlFor="date-at">Dates Attended</label>
                                <input type="date" id='date-at' placeholder='Enter your School' className='w-full' />
                            </div>

                            {/* Dates Attended */}
                            <div className='space-y-1'>
                                <label htmlFor="date-at">Dates Attended</label>
                                <input type="date" id='date-at' placeholder='Enter your School' className='w-full' />
                            </div>

                        </div>

                        {/* Description */}
                        <div className='space-y-1'>
                            <label htmlFor="">Description</label>
                            <textarea name="" id="" placeholder='Enter a Description'></textarea>
                        </div>

                    </div>

                    <div className='flex justify-end mt-6'>
                        <button className='bg-gradient px-4 py-1 rounded-button'>Submit</button>
                    </div>

                </form>
            </div>
        </>, document.body
    ) : null
}

export default ExperienceModal