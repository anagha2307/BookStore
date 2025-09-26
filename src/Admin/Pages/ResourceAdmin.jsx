import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'
const ResourceAdmin = () => {
  return (
    <>
      <AdminHeader />
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className="col-span-2">
        <h1 className='text-center text-xl'>ResourceAdmin</h1>


        </div>
      </div>
      
      <Footer />

    </>
  )
}

export default ResourceAdmin
