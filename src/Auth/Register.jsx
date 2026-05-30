import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { CiLock } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const Register = () => {
    let [eye, seteye] = useState(false)
    let changeEye = () => {
        seteye(!eye)
    }
    let [eye1, seteye1] = useState(false)
    let changeEye1 = () => {
        seteye1(!eye1)
    }
    const intialData = {
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    }
    let [registerData, setRegisterData] = useState(intialData)
    let { name, email, password, confirmpassword } = registerData
    let handleChange = (e) => {
        let { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value })
    }
    let handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || confirmpassword === '') {
            toast.error('fill the all fileds')
            return;
        }
        let gmaildata = await axios.get(`http://localhost:4500/user?email=${email}`)
        if (gmaildata.data) {
            toast.error('email is already exist')
            return;
        }
        if (password !== confirmpassword) {
            toast.error('password and confirmpassword are not matched')
            return;
        }
        try {
            let fe = await axios.post("http://localhost:4500/user", registerData)
            toast.success("login sucessfully")
            setRegisterData(intialData)
        } catch (error) {
            toast.error('somrthing wrong in api')
        }

    }
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[url('../public/bg.jpeg')] bg-cover bg-center h-screen">
            <div className='flex flex-col h-[75vh] w-[25vw]  items-center'>
                <div className='flex h-[21vh] w-[23vw]' >
                    <img className='h-[21vh] w-[22vw]' src="../public/homeicons.png" />
                </div>
                <div className=' h-[10vh] w-[23vw] '>
                    <h1 className=' text-2xl text-center font-bold'>Create Account</h1>
                    <h1 className=' text-2xs text-center '>Register to get started</h1>
                </div>
                <form onSubmit={handleSubmit} className=' flex flex-col h-[28vh] w-[23vw] items-center justify-between p-[3vh] gap-2.5'>

                    <div className=' relative flex justify-center items-center'>
                        <h1 className=' absolute left-1'><MdPersonOutline /></h1>
                        <input className=' border h-[30px] pl-[2vw] rounded-[5px]' type='text' placeholder='Name' name='name' value={name} onChange={handleChange} />
                    </div>
                    <div className=' relative flex justify-center items-center'>
                        <h1 className=' absolute left-1'><CiMail /></h1>
                        <input className=' border h-[30px] pl-[2vw] rounded-[5px] ' type="text" placeholder='email' name='email' value={email} onChange={handleChange} />
                    </div>


                    <div className=' relative flex justify-center items-center'>
                        <h1 className=' absolute left-1'><CiLock /></h1>
                        <input className='border h-[30px] pl-[2vw] rounded-[5px] ' type={eye ? "text" : "password"} placeholder='password' name='password' value={password} onChange={handleChange} />
                        <div onClick={changeEye} className=' absolute right-3'>
                            {
                                eye ? <MdOutlineRemoveRedEye /> : <IoEyeOffOutline />
                            }
                        </div>
                    </div>
                    <div className=' relative flex justify-center items-center'>
                        <h1 className=' absolute left-1'><CiLock /></h1>
                        <input type={eye1 ? "text" : "password"} className='border h-[30px] pl-[2vw] rounded-[5px] ' placeholder='Confrim Password' name='confirmpassword' value={confirmpassword} onChange={handleChange} />
                        <div onClick={changeEye1} className=' absolute right-3'>
                            {
                                eye1 ? <MdOutlineRemoveRedEye /> : <IoEyeOffOutline />
                            }
                        </div>
                    </div>
                    <button className=' bg-[#DD4E10] w-[14vw] p-[5px] rounded-[10px]' type='submit'>Register</button>
                    <p>Already have a account? Login </p>
                </form>
            </div>
        </div>
    )
}

export default Register