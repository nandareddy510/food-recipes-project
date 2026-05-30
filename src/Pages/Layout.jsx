import React from 'react'
import Navibar from '../Navbar/Navibar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (

    <div className='min-h-screen bg-[#f8f6f4]'>

      {/* MAIN CONTAINER */}

      <div className='w-[95%] max-w-[1600px] mx-auto pt-6'>

        {/* NAVBAR */}

        <Navibar />

        {/* PAGES */}

        <div className='mt-8 pb-10'>
          <Outlet />
        </div>

      </div>

    </div>

  )
}

export default Layout