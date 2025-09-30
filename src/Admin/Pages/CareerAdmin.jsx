import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSideBar from '../Components/AdminSideBar'
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const CareerAdmin = () => {
  const [jobListStatus, setJobListStatus] = useState(true)
  const [ListApplicationStatus, setListApplicationStatus] = useState(false)
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className="col-span-4">
          <h1 className='text-center text-3xl font-bold'>Careers</h1>
          <div className="md:px-40">
            {/* tabs */}
            <div className="flex justify-center items-center my-8 font-medium text-lg">
              <p onClick={() => { setJobListStatus(true); setListApplicationStatus(false); }}
                className={jobListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-b border-gray-200 cursor-pointer'}>Books</p>
              <p onClick={() => { setListApplicationStatus(true); setJobListStatus(false); }}
                className={ListApplicationStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-b border-gray-200 cursor-pointer'}>Users</p>
            </div>
            {/* contents */}
            {
              jobListStatus &&
              <div>
                <div className="flex md:justify-center justify-start my-5 px-4">
                  <input type="text" className="p-2 w-75 rounded border border-gray-300 text-black placeholder-gray-600" placeholder='Job Title' />
                  <button className="bg-green-700 text-white  px-3">Search</button>
                </div>
                <div className='md:max-w-4xl  max-w-sm  border border-gray-300 shadow mx-auto'>
                  <div className="flex justify-between items-center m-5">
                    <h1 className='text-xl p-5 text-gray-700 font-bold'>Job Title</h1>
                    <div className="flex">
                      <button className="bg-red-800 text-white text-lg rounded m-5 md:px-4 px-2 py-2">Delete
                        <FontAwesomeIcon icon={faTrash} className='ms-2 text-2xl' />
                      </button>
                    </div>
                  </div>
                  <hr className='text-gray-300 mx-3' />
                  <div className="text-md p-5 m-5 flex flex-col gap-3">
                    <div className="flex gap-1 text-blue-700">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <h1 >Location</h1>
                    </div>
                    <h1>Job Type: <span>Senior Level</span></h1>
                    <h1>Salary: <span>10 Lakhs</span></h1>
                    <h1>Qualification: <span>M-Tech/B-Tech/MCA/BCA</span></h1>
                    <h1>Experience: <span>5-7 years</span></h1>
                    <h1>Description: <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nesciunt porro illo reiciendis, repellat veritatis debitis voluptatibus ut, natus quia dolor nostrum est veniam alias explicabo repudiandae tempora neque quaerat!</span></h1>
                  </div>
                </div>
              </div>
            }
            {
              ListApplicationStatus &&
              <div className="p-10 ">
                <table className="w-full my-3 shadow">
                  <thead>
                    <tr>
                      <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">Sl.No</th>
                      <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">Job Title</th>
                      <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">Name</th>
                      <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">Qualification</th>
                      <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">Email</th>
                      <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">Phone</th>
                      <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">Cover</th>
                      <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-500 p-3 text-center">1</td>
                      <td className="border border-gray-500 p-3 text-center">Front End Developer</td>
                      <td className="border border-gray-500 p-3 text-center">Max Miller</td>
                      <td className="border border-gray-500 p-3 text-center">BCA</td>
                      <td className="border border-gray-500 p-3 text-center">max@gmail.com</td>
                      <td className="border border-gray-500 p-3 text-center">90876543322</td>
                      <td className="border border-gray-500 p-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis ducimus blanditiis sequi voluptatibus animi harum a nisi illo soluta magnam unde est saepe corporis quae accusamus, et doloremque dolores.
                      </td>
                      <td className="border border-gray-500 p-3 text-center"><Link className='text-blue-600 underline'>Resume</Link></td>
                      
                    </tr>

                  </tbody>

                </table>
              </div>
            }


          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CareerAdmin
