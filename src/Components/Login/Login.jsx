import React from 'react'
import { InputField } from '../../Auth/InputField'
import PaaswordAuthInput from '../../Auth/PasswordField'
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"

const Login =() =>{
  const navigate = useNavigate()
  const onSubmitHandling = (e) =>{
    e.preventDefault();
    navigate("/Dashboard");
  }
  return (
    <div className='h-screen w-full flex overflow-hidden font-poppins'>
      {/* side image */}
      <div className='image w-full  hidden lg:block h-screen bg-cover bg-center lg:overflow-hidden'></div>
      {/* login field */}
      <div className='w-full h-screen text-md lg:text-lg font-medium'>
        {/* sign in Header */}
        <div className='flex flex-col items-center justify-center gap-y-2 mt-4'>
          <h1 className='text-3xl font-bold'>Sign In</h1>
          <caption className='flex'>Fill in your details:</caption>
        </div>
        {/* FormControl */}
        <div className='px-10 py-10 lg:mt-0 lg:px-20 lg:py-20 '>
        <form onSubmit={onSubmitHandling} className='w-full border-2 px-10 py-10 rounded-lg'>
          <div className='bg-green-200 rounded-md'>
            <h2 className='font-bold text-center'>Existing User Login</h2>
          </div>
          {/* Input field value */}
          {/* email input */}
          <div className='flex flex-col'>
            <div className='my-3 flex justify-start items-center gap-2'>
            <IoMdMail />
            <label htmlFor="email" >Email Address:</label>
            </div>
            <InputField name="email" type="email"/>
          </div>

          {/* password */}
          <div className='flex flex-col'>
            <div className='my-3 flex justify-start items-center gap-2'>
            <RiLockPasswordFill />
            <label htmlFor="password" >Password:</label>
            </div>
            <PaaswordAuthInput name='password' type="password"/>
          </div>
          {/* submit button */}
          <button className='w-[30%] ml-[70%] mt-5 h-10 border-2 rounded-lg hover:bg-green-600 bg-green-200' type='submit'>Resume</button>
        </form>
        </div>
      </div>
    </div>
  )
}
export default Login
