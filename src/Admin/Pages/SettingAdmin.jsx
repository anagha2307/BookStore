import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'

const SettingAdmin = () => {
  return (
    <>

      <AdminHeader />
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-3'>
          <h1 className="text-3xl text-center py-10">Settings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <div className='px-5'>
              <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas omnis hic exercitationem voluptate sint illum tenetur aliquid sunt quas, nemo illo molestias pariatur nam rem delectus, fugiat autem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas omnis hic exercitationem voluptate sint illum tenetur aliquid sunt quas, nemo illo molestias pariatur nam rem delectus, fugiat autem qui</p>
              <br /><br />
              <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas omnis hic exercitationem voluptate sint illum tenetur aliquid sunt quas, nemo illo molestias pariatur nam rem delectus, fugiat autem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas omnis hic exercitationem voluptate sint illum tenetur aliquid sunt quas, nemo illo molestias pariatur nam rem delectus, fugiat autem qui</p>
            </div>
              <form className='bg-blue-100 p-10 md:w-full rounded'>
                <img src="/user_icon.png" alt="User-icon" className='flex justify-center items-center mx-auto' />
                <input type="text" placeholder='Username' className="w-full bg-white p-2 rounded placeholder-gray-500 focus:outline-none text-gray-600 my-2" />
                <input type="email" placeholder='Password' className="w-full bg-white p-2 rounded placeholder-gray-500 focus:outline-none text-gray-600 my-2" />
                <input type="email" placeholder='Confirm Password' className="w-full bg-white p-2 rounded placeholder-gray-500 focus:outline-none text-gray-600 my-2" />
                <div className="flex gap-3">
                  <button className="bg-yellow-400 p-2 w-full rounded text-white mb-0">Reset </button>
                  <button className="bg-green-800 p-2 w-full rounded text-white mb-0">Update </button>
                </div>
              </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SettingAdmin
