import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'

const CareerAdmin = () => {
  return (
    <>
     <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className="col-span-4">
        <h1 className='text-center text-2xl'>Careers</h1>
        </div>
      </div>      
      <Footer />
    </>
  )
}

export default CareerAdmin
