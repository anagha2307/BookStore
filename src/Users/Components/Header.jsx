import React from 'react'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <>
        {/* Upper part of header with logo */}
        <div className='flex justify-between items-center m-3'>
          <img src="logo.png" alt="logo" width={'50px'} height={'50px'} />
          <h1 className='text-3xl text-center font-bold'>BOOK  STORE</h1>
          <div className='flex items-center space-x-1 text-xl'>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <img src="User.png" alt="User-icon" className="w-9 h-9 rounded-full" />
          </div>
        </div>
        {/* Lower part of header with links */}
        <div className='w-full bg-blue-950 flex justify-center text-white p-2'>
          <a href="#home" className='mx-8 hover:text-rose-200'>Home</a>
          <a href="#books" className='mx-8 hover:text-rose-200'>Books</a>
          <a href="#careers" className='mx-8 hover:text-rose-200'>Careers</a>
          <a href="#contact" className='mx-8 hover:text-rose-200'>Contact</a>
        </div>
    </>
  )
}

export default Header
