import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faBook, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  const [listStatus, setListStatus] = useState(false)

  return (
    <div className="bg-blue-100 h-screen p-5">
      {/* User Icon */}
      <div className="flex justify-center my-20 mx-auto">
        <img src="/user_icon.png" alt="User-icon" />
      </div>
      {/* menu icon */}
      <div className="md:hidden flex justify-center items-center text-black text-xl">
        <button onClick={() => setListStatus(!listStatus)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* links */}
      <ul className={`pr-15 md:text-lg text-2xl my-2 md:my-0 ${listStatus ? 'block' : 'hidden'} md:flex md:flex-col space-y-6 md:justify-center md:items-center `} >     
        <li className='flex justify-center items-center gap-3'>
          <FontAwesomeIcon icon={faBook} className='my-1'/>
          <Link to="/admin-dashboard">Home</Link>
        </li>
        <li className='flex justify-center items-center gap-3 ms-6'>
          <FontAwesomeIcon icon={faBook} className='my-1'/>
          <Link to="/admin-resources">All Books</Link>
        </li>
        <li className='flex justify-center items-center gap-3'>
          <FontAwesomeIcon icon={faBagShopping} className='my-1'/>
          <Link to="/admin-careers">Careers</Link>
        </li>
        <li className='flex justify-center items-center gap-3'>
          <FontAwesomeIcon icon={faScrewdriverWrench} className='my-1'/>
          <Link to="/admin-settings">Settings</Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminSideBar
