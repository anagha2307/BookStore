import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'


const AllBooks = () => {
  return (
    <>
      <Header/>
      <>
      <div className="flex flex-col justify-center items-center my-5">
        <h1 className="text-3xl font-bold">Collections</h1>
        <div className="flex my-5">
          <input type="text" className="p-2 rounded border border-gray-300 text-black placeholder-gray-600" placeholder='Search By Title' />
          <button className="bg-blue-600 text-white  px-3">Search</button>
        </div>
        {/* grid */}
        <div className="grid grid-cols-3 p-5">
          <div className="col-span-1">
            <h1 className="text-2xl font-semibold">Filter</h1>
            <div className="mt-3">
              <input type="radio" name="filter" id="literary fiction" />
              <label htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" name="filter" id="literary fiction" />
              <label htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" name="filter" id="literary fiction" />
              <label htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" name="filter" id="literary fiction" />
              <label htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" name="filter" id="literary fiction" />
              <label htmlFor="Literary">Literary Fiction</label>
            </div>
          </div>
          <div className="col-span-2">

          </div>
        </div>

      </div>
      </>
      
      <Footer/>     
    </>
  )
}

export default AllBooks
