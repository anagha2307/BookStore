import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AllBooks = () => {
  const [listStatus, setListStatus] = useState(false)
  return (
    <>
      <Header />
      <>
        <div className="flex flex-col justify-center items-center my-5">
          <h1 className="text-3xl font-bold">Collections</h1>
          <div className="flex my-5">
            <input type="text" className="p-2 rounded border border-gray-300 text-black placeholder-gray-600" placeholder='Search By Title' />
            <button className="bg-blue-600 text-white  px-3">Search</button>
          </div>
          {/* grid */}
          <div className="grid md:grid-cols-4 grid-cols-1 md:mx-10">
            {/* filter */}
            <div className="col-span-1 mx-10">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">Filter</h1>
                <button onClick={() => setListStatus(!listStatus)} className="text-2xl md:hidden"><FontAwesomeIcon icon={faBars} /></button>
              </div>
              <div className={listStatus ? 'block' : 'md:block hidden'}>
                <div className="mt-3">
                  <input type="radio" name="filter" id="literary fiction" />
                  <label htmlFor="Literary" className='mx-3'>Literary Fiction</label>
                </div>
                <div className="mt-3">
                  <input type="radio" name="filter" id="literary fiction" />
                  <label htmlFor="Literary" className='mx-3'>Philosophy</label>
                </div>
                <div className="mt-3">
                  <input type="radio" name="filter" id="literary fiction" />
                  <label htmlFor="Literary" className='mx-3'>Romance</label>
                </div>
                <div className="mt-3">
                  <input type="radio" name="filter" id="literary fiction" />
                  <label htmlFor="Literary" className='mx-3'>Mystery/Thriller</label>
                </div>
                <div className="mt-3">
                  <input type="radio" name="filter" id="literary fiction" />
                  <label htmlFor="Literary" className='mx-3'>Horror</label>
                </div>
                <div className="mt-3">
                  <input type="radio" name="filter" id="literary fiction" />
                  <label htmlFor="Literary" className='mx-3'>Auto/Biography</label>
                </div>
                <div className="mt-3">
                  <input type="radio" name="filter" id="literary fiction" />
                  <label htmlFor="Literary" className='mx-3'>Self-Help</label>
                </div>
                <div className="mt-3">
                  <input type="radio" name="filter" id="literary fiction" />
                  <label htmlFor="Literary" className='mx-3'>Politics</label>
                </div>
              </div>
            </div>
            {/* books */}
            <div className="col-span-3">
              <div className="md:flex md:flex-row flex-col justify-center items-center">
                <div className="shadow p-3 rounded md:mx-4 my-10">
                  <img width={'100%'} height={'250px'} src="/photo.png" alt="book1" />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>Book Title</p>
                    <Link to={'/books/id/view'} className="bg-blue-950 p-2 w-full text-center rounded text-white my-2 mb-0">View Book</Link>
                  </div>
                </div>
                <div className="shadow p-3 rounded md:mx-4 my-10">
                  <img width={'100%'} height={'250px'} src="/photo.png" alt="book2" />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>Book Title</p>
                    <Link to={'/books/id/view'} className="bg-blue-950 p-2 w-full text-center rounded text-white my-2 mb-0">View Book</Link>
                  </div>
                </div>
                <div className="shadow p-3 rounded md:mx-4 my-10">
                  <img width={'100%'} height={'250px'} src="/photo.png" alt="book3" />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>Book Title</p>
                    <Link to={'/books/id/view'} className="bg-blue-950 p-2 w-full text-center rounded text-white my-2 mb-0">View Book</Link>
                  </div>
                </div>
                <div className="shadow p-3 rounded md:mx-4 my-10">
                  <img width={'100%'} height={'250px'} src="/photo.png" alt="book4" />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>Book Title</p>
                    <Link to={'/books/id/view'} className="bg-blue-950 p-2 w-full text-center rounded text-white my-2 mb-0">View Book</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  )
}

export default AllBooks
