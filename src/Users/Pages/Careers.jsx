import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons'

const Careers = () => {
  const [modalStatus, setModalstatus] = useState(true)
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-center my-5">Careers</h1>
        <p className='md:text-center text-justify md:text-sm text-lg p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint soluta tenetur ullam ipsum, ipsam a est odit ducimus sit asperiores sapiente id, nobis aperiam eligendi incidunt! Eos ipsum sequi modi?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint soluta tenetur ullam ipsum, ipsam a est odit ducimus sit asperiores sapiente id, nobis aperiam eligendi incidunt! Eos ipsum sequi modi?
        </p>
        <h1 className='my-5 text-2xl mx-5'>Current Openings</h1>
        <div className="flex md:justify-center justify-start my-5 px-4">
          <input type="text" className="p-2 w-75 rounded border border-gray-300 text-black placeholder-gray-600" placeholder='Job Title' />
          <button className="bg-green-700 text-white  px-3">Search</button>
        </div>
        <div class="md:max-w-4xl max-w-sm shadow mx-auto">
          <div className="flex justify-between items-center m-5">
            <h1 className='text-xl p-5 text-gray-700 font-bold'>Job Title</h1>
            <div className="flex">
              <button className="bg-blue-800 text-white text-lg rounded m-5 md:px-4 px-2 py-2">Apply
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2 text-2xl' />
              </button>
            </div>
          </div>
          <hr className='text-gray-300 mx-3' />
          <div className="text-md p-5 m-5 flex flex-col gap-3">
            <div className="flex gap-1">
              <FontAwesomeIcon icon={faLocationDot} className='text-blue-700' />
              <h1>Location</h1>
            </div>
            <h1>Job Type: <span>Senior Level</span></h1>
            <h1>Salary: <span>10 Lakhs</span></h1>
            <h1>Qualification: <span>M-Tech/B-Tech/MCA/BCA</span></h1>
            <h1>Experience: <span>5-7 years</span></h1>
            <h1>Description: <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nesciunt porro illo reiciendis, repellat veritatis debitis voluptatibus ut, natus quia dolor nostrum est veniam alias explicabo repudiandae tempora neque quaerat!</span></h1>
          </div>
        </div>



      </div>
      {/* modal */}
      {
        <div className="relative z-10 overflow-y-auto">
          <div className="bg-gray-500/75 fixed inset-0">
            <div className="flex justify-center items-center min-h-screen scroll-auto">
              <div className="bg-white rounded-2xl w-150">
                {/* modal header*/}
                <div className="bg-black text-white flex justify-between items-center p-3 text-xl">
                  <h3>Application Form</h3>
                  <FontAwesomeIcon onClick={() => setModalstatus(false)} icon={faXmark} />
                </div>
                {/* modal body*/}
                <div className="relative p-5">
                  <div className="md:grid grid-cols-2 gap-2">
                    <div className="mb-3 col-span-1">
                      <input type="text" placeholder='Name' className='border p-2 w-full rounded placeholder-gray-600 text-black' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Email Id' className='border w-full p-2 rounded placeholder-gray-600 text-black' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Qualification' className='border w-full p-2 rounded placeholder-gray-600 text-black' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Phone' className='border w-full p-2 rounded placeholder-gray-600 text-black' />
                    </div>
                    <div className="mb-3 col-span-2">
                      <textarea type="text" placeholder='Coverletter' className='border w-full p-2 rounded placeholder-gray-600 text-black' />
                    </div>
                  </div>
                  <div className="mb-3 col-span-2 flex">
                    <input type="text" placeholder='Resume' className='border border-gray-300 p-2 bg-gray-600 placeholder-white text-black w-24' />
                    <input type="file" placeholder='Name' className='border border-gray-400 p-2 w-full placeholder-gray-600 text-black' />
                  </div>
                </div>
                {/* modal footer*/}
                <div className="bg-gray-400 text-white flex justify-end items-center p-3 text-xl">
                  <h3>Application Form</h3>
                </div>



              </div>
            </div>
          </div>
        </div>
      }

      <Footer />

    </>
  )
}

export default Careers
