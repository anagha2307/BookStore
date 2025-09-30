import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'

const ResourceAdmin = () => {
  const [UsersListStatus, setUsersListStatus] = useState(true)
  const [BookListStatus, setBookListStatus] = useState(false)
  return (
    <>
      <AdminHeader />
      <div className="grid md:grid-cols-5 grid-cols-1">
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className="col-span-4">
          <h1 className='text-center text-2xl my-5 font-bold'>Collections</h1>
          <div className="md:px-40">
            {/* tabs */}
            <div className="flex justify-center items-center my-8 font-medium text-lg">
              <p onClick={() => { setBookListStatus(true); setUsersListStatus(false); }}
                className={BookListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-b border-gray-200 cursor-pointer'}>Books</p>
              <p onClick={() => { setUsersListStatus(true); setBookListStatus(false); }}
                className={UsersListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-b border-gray-200 cursor-pointer'}>Users</p>
            </div>
          </div>

          {/* books */}
          {
            BookListStatus &&
            <div className="md:grid grid-cols-4 md:space-x-2 space-y-5  w-full mt-5">
              <div className="shadow p-3 rounded m-4">
                <img width={'100%'} height={'250px'} src="/photo.png" alt="book1" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p>Book Title</p>
                  <p>$ 400</p>
                </div>
              </div>
              <div className="shadow p-3 rounded m-4">
                <img width={'100%'} height={'250px'} src="/photo.png" alt="book1" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p>Book Title</p>
                  <p>$ 400</p>
                </div>
              </div>
              <div className="shadow p-3 rounded m-4">
                <img width={'100%'} height={'250px'} src="/photo.png" alt="book1" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p>Book Title</p>
                  <p>$ 400</p>
                </div>
              </div>
              <div className="shadow p-3 rounded m-4">
                <img width={'100%'} height={'250px'} src="/photo.png" alt="book1" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">Author</p>
                  <p>Book Title</p>
                  <p>$ 400</p>
                </div>
              </div>
            </div>

          }
          {/* Users */}
          {
            UsersListStatus &&
            <div className='md:grid grid-cols-3 w-full my-5'>

              <div className="shadow rounded p-3 m-4 bg-gray-200">
                <p className="text-red-700 font-bold text-lg">ID : 985442567890</p>
                <div className="flex items-center mt-3">
                  <img width={'100px'} height={'100px'} src="/User.png" alt="User" />
                  <div className="flex flex-col text-lg ml-6">
                    <p className="text-blue-800">Username</p>
                    <p>email</p>
                  </div>
                </div>

              </div>

            </div>
          }






        </div>
      </div>

      <Footer />

    </>
  )
}

export default ResourceAdmin
