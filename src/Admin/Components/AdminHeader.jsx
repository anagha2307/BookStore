import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const AdminHeader = () => {
  return (
    <>
    <div className="flex justify-between my-1">
      <div className="flex items-center md:m-5 m-3 md:px-5">
        <img src="/logo.png" alt="logo" width={'50px'} height={'50px'} />
        <h1 className='text-2xl md:text-3xl md:text-center font-bold ms-2'>BOOK  STORE</h1>
      </div>
      <div className='flex '>   
        <button className='md:mx-10 mx-2 my-5 p-3 border rounded'> <FontAwesomeIcon icon={faPowerOff} />Logout</button>
      </div>
    </div>
    <nav className='w-full bg-blue-950 text-white p-2'>
      <h1 className='md:text-center text-xs md:text-md'>Welcome, Admin!  You're all set to manage and monitor the system.Let's get to work! </h1>
    </nav>     
    </>
  )
}

export default AdminHeader
