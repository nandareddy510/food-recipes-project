import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoMailSharp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";

const Login = () => {
  const intail = {
    email: '',
    password: ''
  }
  let [eye,seteye] = useState(false)
  let [loginData, setLoginData] = useState(intail);
  let { email, password } = loginData;
  let handlechange = (e) => {
    let { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value })
  }
  let changeEye = ()=>{
    seteye(!eye)
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    let fe = await axios.get(`http://localhost:4500/user?email=${email}`)
    let datafrom = fe.data[0]
    if (!datafrom) {
      toast.error('email is not found')
      return;
    }
    if (datafrom.password === password) {
      toast.success('sucessfully login')
    } else {
      toast.error('incorrect password')
    }
  }

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[url('../public/bg1.jpeg')] bg-cover bg-center h-screen">
      <div className='flex flex-col h-[75vh] w-[25vw]  items-center'  >
        <div className='flex h-[21vh] w-[23vw]' >
          <img className='h-[21vh] w-[23vw]' src="../public/homeicons.png" />
        </div>
        <div className=' h-[10vh] bg-[#FEFEFE]  w-[23vw]'>
            <h1 className=' text-2xl text-center font-bold'>Wecome Back!</h1>
            <h1  className=' text-2xs text-center font-bold'>Login to continue</h1>
          </div>
        <form onSubmit={handleSubmit} className=' flex flex-col h-[28vh] w-[23vw] items-center justify-between p-[3vh] gap-2.5 bg-[#FEFEFE]'>
         <div className=' relative flex justify-center items-center'>
          <h1 className=' absolute left-1'><IoMailSharp /></h1>
           <input className=' border h-[30px] pl-[2vw] rounded-[5px] ' type="text" placeholder='email' name='email' value={email} onChange={handlechange} />
         </div>
          <div className=' relative flex justify-center items-center'>
          <h1 className=' absolute left-1'><IoIosLock /></h1>
          <input className='border h-[30px] pl-[2vw] rounded-[5px] ' type={eye? "text":"password"} placeholder='password' name='password' value={password} onChange={handlechange} />
          <div onClick={changeEye} className=' absolute right-3'>
            {
              eye? <MdOutlineRemoveRedEye />:<IoEyeOffOutline />

            }

          </div>
          </div>
          <p>Forget password?</p>
          <button className=' bg-[#DD4E10] w-[14vw] p-[5px] rounded-[10px]'>Login</button>
          <p>Already have a account? Register </p>
        </form>
      </div>
    </div>
  )
}

export default Login