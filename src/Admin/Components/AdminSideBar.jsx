import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faBook, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  const [listStatus, setListStatus] = useState(false)
  return (
    <div className="bg-blue-100 min-h-screen text-center p-5">
      {/* User Icon */}
      <div className="flex justify-center my-20 mx-auto">
        <img src="/user_icon.png" alt="User-icon" />
      </div>
      <h1 className="font-bold">Admin</h1>
      {/* menu icon */}
      <div className="md:hidden flex justify-center text-black text-xl">
        <button onClick={() => setListStatus(!listStatus)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* links */}
      <div className={listStatus ? 'block md:text-lg' : 'md:block hidden flex justify-center text-xl'}>
        <div className="mt-3 gap-3">         
          <label htmlFor="Literary" className='mx-3'>
            <Link to={'/admin-dashboard'}><FontAwesomeIcon icon={faBook} className='my-1' />Home</Link>
          </label>
        </div>
        <div className="mt-3 gap-2">
          <label htmlFor="collection" className='ml-9'>
            <Link to={'/admin-resources'}><FontAwesomeIcon icon={faBook} className='my-1' />Resources</Link>
          </label>
        </div>
        <div className="mt-3 gap-2 ml-4">
          <label htmlFor="collection" className='mx-3'>
            <Link to={'/admin-careers'}><FontAwesomeIcon icon={faBagShopping} className='my-1' />Careers</Link>
          </label>
        </div>
        <div className="mt-3 gap-2 ml-4">
          <label htmlFor="collection" className='mx-3'>
            <Link to={'/admin-settings'}><FontAwesomeIcon icon={faScrewdriverWrench} className='my-1' />Settings</Link>
          </label>
        </div>
      </div>
    </div>
  )
}

export default AdminSideBar
