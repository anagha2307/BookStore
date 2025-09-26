import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const SettingAdmin = () => {
  return (
    <>
      <AdminHeader />
      <div className="grid md:grid-cols-5 grid-cols-1">
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4'>
          <h1 className="text-3xl text-center py-10">Settings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <div className='px-5'>
              <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas omnis hic exercitationem voluptate sint illum tenetur aliquid sunt quas, nemo illo molestias pariatur nam rem delectus, fugiat autem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas omnis hic exercitationem voluptate sint illum tenetur aliquid sunt quas, nemo illo molestias pariatur nam rem delectus, fugiat autem qui</p>
              <br /><br />
              <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas omnis hic exercitationem voluptate sint illum tenetur aliquid sunt quas, nemo illo molestias pariatur nam rem delectus, fugiat autem qui.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptas omnis hic exercitationem voluptate sint illum tenetur aliquid sunt quas, nemo illo molestias pariatur nam rem delectus, fugiat autem qui</p>
            </div>
              <form className='bg-blue-100 p-10 md:w-full rounded'>
                <label htmlFor="adminPic" className='flex flex-col justify-center items-center'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nqsUNHPOFal6QXq5VkMgzBXrqGiSo_43AMQf5L9iezak1wIU6oAVg8hyoHwkWjZx9Qk&usqp=CAU" 
                  alt="admin profile" style={{width:'200px',height:'200px',borderRadius:'50%'}} />
                  <FontAwesomeIcon icon={faPen} className='bg-yellow-400 p-2 text-white rounded' 
                  style={{marginLeft:'140px',marginBottom:'120px'}}/>
                </label>
                <input type="text" placeholder='Username' className="w-full bg-white p-2 rounded placeholder-gray-500 focus:outline-none text-gray-600" />
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
