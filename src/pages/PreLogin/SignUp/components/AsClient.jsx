import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ProfileImg from '../../../../assets/img/profile-img.webp'

// ICONS
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

const AsClient = () => {

  // ========= Image File Input =========== //
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // ======================================= //

  // ===========Password Visibility========= //
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showCnfPassword, setShowCnfPassword] = useState(false);

  const toggleCnfPasswordVisibility = () => {
    setShowCnfPassword(!showCnfPassword);
  };
  // ======================================= //

  // ============ Country Values ===========
  const country = ['UK', 'Russia', 'Australia', 'India']
  // =======================================

  // ============ City Values ===========
  const city = ['A', 'B', 'C', 'D']
    // =======================================

  return (
    <div className='container grid justify-items-center'>
      <form action="" className='bg-accent py-8 px-2 md:px-8 space-y-6 rounded-card'>
      
        <div className='grid justify-items-center space-y-2'>
          <h4>Sign Up to <span className='textGrad'>Hire Talents</span></h4>
          <p className='text-lg text-center'>To keep things safe & simple we need your personal information</p>
        </div>

        {/* Upload Profile Picture */}
        <div className='grid justify-items-center gap-4'>
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Profile"
              className="w-36 h-36 md:w-40 md:h-40 object-cover rounded-full"
            />
          ) : (
            <img
              src={ProfileImg}
              alt="Default Profile"
              className="w-[40%] md:w-[30%] lg:w-[20%] rounded-full"
            />
          )}
          <input
            type='file'
            id='pic'
            hidden
            onChange={handleFileChange}
          />
          {/* <button onClick={handleClick} className={`bg-gradient pl-3 pr-4 py-2 rounded-button flex items-center gap-1`}><AiOutlinePlus /> Upload File</button> */}
          <label htmlFor="pic" className='bg-gradient flex items-center px-5 py-2 rounded-button cursor-pointer gap-1'><AiOutlinePlus />Upload Photo</label>
        </div>

        <div className='space-y-3'>

          {/* Username */}
          <div className='space-y-1'>
              <label htmlFor="username">Username</label>
              <input type="text" placeholder='Enter your username' className='w-full' />
          </div>

          {/* Email */}
          <div className='space-y-1'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter your email' className='w-full'/>
          </div>

          <div className='grid lg:grid-cols-2 gap-2'>
            {/* Password */}
            <div className='space-y-1'>
              <label htmlFor="pass">Password</label>
              <div className='relative'>
                <div onClick={togglePasswordVisibility} className='absolute cursor-pointer text-divide text-xl right-3 top-[50%] translate-y-[-50%]'>
                  {showPassword ?
                    <AiOutlineEye /> : <AiOutlineEyeInvisible />
                  }
                </div> 
                <input type={showPassword ? 'text' : 'password'} id='pass' placeholder='Enter your password' className='w-full' />
              </div>
            </div>

            {/* Confirm Password */}
            <div className='space-y-1'>
              <label htmlFor="cnfpass">Confirm Password</label>
              <div className='relative'>
                <div onClick={toggleCnfPasswordVisibility} className='absolute cursor-pointer text-divide text-xl right-3 top-[50%] translate-y-[-50%]'>
                  {showCnfPassword ?
                    <AiOutlineEye /> : <AiOutlineEyeInvisible />
                  }
                </div>
                <input type={showCnfPassword ? 'text' : 'password'} id='cnfpass' placeholder='Confirm your password' className='w-full' />
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-3'>

            {/* Company Name */}
            <div className='space-y-1'>
              <label htmlFor="comp">Company Name</label>
              <input type="text" placeholder='Enter your company name' className='w-full' />
            </div>

            {/* DOB */}
            <div className='space-y-1'>
              <label htmlFor="dob">DOB</label>
              <input type="date" className='w-full' />
            </div>

          </div>

          <div className='grid md:grid-cols-2 gap-3'>

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

        <div className='flex justify-center'>
          <Link>
                <button className='bg-gradient px-5 py-2 rounded-button'>Sign Up</button>
          </Link>
        </div>

      </form>
    </div>
  )
}

export default AsClient
