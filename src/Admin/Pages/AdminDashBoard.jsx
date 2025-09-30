import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
const AdminDashBoard = () => {
  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 p-10">
          <div className="md:grid grid-cols-3">
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-blue-900 p-4 flex items-center text-5xl rounded text-white">
                <FontAwesomeIcon icon={faBook}/>
                <div className="text-center ms-10 md:ms-0">
                  <h3 className="text-xl">Total No.of Books</h3>
                  <h3 className="text-4xl">100+</h3>
                </div>                
              </div>
            </div>
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-green-900 p-4 flex items-center text-5xl rounded text-white">
                <FontAwesomeIcon icon={faUsers}/>
                <div className="text-center ms-10 md:ms-0">
                  <h3 className="text-xl">Total No.of Users</h3>
                  <h3 className="text-4xl">100+</h3>
                </div>                
              </div>
            </div>
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-yellow-500 p-4 flex items-center text-5xl rounded text-white">
                <FontAwesomeIcon icon={faUser}/>
                <div className="text-center ms-10 md:ms-0">
                  <h3 className="text-xl">Total No.of Employees</h3>
                  <h3 className="text-4xl">100+</h3>
                </div>                
              </div>
            </div>
          </div>
          <div className="md:grid grid-cols-2 p-5 my-5">
            <div>Bar Chart</div>
            <div>Pie Chart</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AdminDashBoard
