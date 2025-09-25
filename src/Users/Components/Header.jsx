import React from 'react'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {
  const [listStatus,setListStatus] = useState(false)
  return (
    <>
        {/* Upper part of header with logo */}
        <div className='grid grid-cols-3 p-3'>
          <div className="flex items-center">
            <img src="logo.png" alt="logo" width={'50px'} height={'50px'} />
            <h1 className='text-3xl text-center font-bold ms-2 md:hidden'>BOOK  STORE</h1>
          </div>
          <div className="md:flex justify-center items-center hidden">
            <h1 className='text-3xl text-center font-bold ms-2'>BOOK  STORE</h1>
          </div>
          
          <div className='flex justify-end items-end md:my-0 my-3 space-x-1 text-xl'>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <Link to={'/login'}>
            <button><FontAwesomeIcon icon={faUser}/></button>
            </Link>
            
          </div>
        </div>
        {/* Lower part of header with links */}
        <nav className='w-full bg-blue-950 text-white p-2'>
          {/* menubar & login */}
          <div className="flex justify-start items-center text-xl md:hidden">   
            <button onClick={() =>setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /> </button>
          {/*login link */}
          <Link to ={'/login'}>
          <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
            <FontAwesomeIcon icon={faUser} className='me-1' />
            Login{""}
            </button>
          </Link>            
          </div>
          <ul className={listStatus?"flex": "md:flex justify-center items-center hidden p-2"}>
          <li className='mx-8 hover:text-rose-200'><Link to={'/'}>Home</Link></li>
          <li className='mx-8 hover:text-rose-200'><Link to={'/all-books'}>Books</Link></li>
          <li className='mx-8 hover:text-rose-200'><Link to={'/careers'}>Careers</Link></li>
          <li className='mx-8 hover:text-rose-200'><Link to={'/contact'}>Contact</Link></li>
        </ul>

        </nav>
        
    </>
  )
}

export default Header
