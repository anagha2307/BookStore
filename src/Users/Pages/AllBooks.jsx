import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'


const AllBooks = () => {
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
          <div className="grid md:grid-cols-3 grid-cols-1 md:mx-10">
            <div className="col-span-1 mx-20">
              <h1 className="text-2xl font-semibold">Filter</h1>
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
            <div className="col-span-2">
              <div className="md:flex md:flex-row flex-col justify-center items-center">
                <div className="shadow p-3 rounded md:mx-4 my-10">
                  <img width={'100%'} height={'250px'} src="/photo.png" alt="book1" />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>Book Title</p>
                    <p>$ 400</p>
                  </div>
                </div>
                <div className="shadow p-3 rounded md:mx-4 my-10">
                  <img width={'100%'} height={'250px'} src="/photo.png" alt="book2" />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>Book Title</p>
                    <p>$ 400</p>
                  </div>
                </div>
                <div className="shadow p-3 rounded md:mx-4 my-10">
                  <img width={'100%'} height={'250px'} src="/photo.png" alt="book3" />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>Book Title</p>
                    <p>$ 400</p>
                  </div>
                </div>
                <div className="shadow p-3 rounded md:mx-4 my-10">
                  <img width={'100%'} height={'250px'} src="/photo.png" alt="book4" />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">Author</p>
                    <p>Book Title</p>
                    <p>$ 400</p>
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
