import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = () => {
  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(true)

  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className="bg-black"></div>
      <div className="bg-white p-3"></div>
      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className="font-bold md:text-3xl text-2xl">Username</h1>
          <FontAwesomeIcon className='text-blue-400 ms-3 text-2xl' icon={faCircleCheck} />
        </div>
        <div>Edit</div>
      </div>
      <p className="md:px-20 px-5 my-5 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores vel reprehenderit voluptatem sequi possimus, corrupti tempora, nobis exercitationem dolorem illum aperiam architecto. Perferendis optio minus illo molestias iure, magni quibusdam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores vel reprehenderit voluptatem sequi possimus, corrupti tempora, nobis exercitationem dolorem illum aperiam architecto. Perferendis optio minus illo molestias iure, magni quibusdam?
      </p>
      <div className="md:px-40">
        {/* tabs */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={() => { setSellBookStatus(true); setPurchaseStatus(false); setBookStatus(false) }}
            className={sellBookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-b border-gray-200 cursor-pointer'}>Sell Books</p>
          <p onClick={() => { setBookStatus(true); setPurchaseStatus(false); setSellBookStatus(false) }}
            className={bookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-b border-gray-200 cursor-pointer'}>Book Status</p>
          <p onClick={() => { setPurchaseStatus(true); setSellBookStatus(false); setBookStatus(false) }}
            className={purchaseStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border border-b border-gray-200 cursor-pointer'}>Purchase History</p>
        </div>
      </div>
      {/* contents */}
      {/* Sell Books */}
      {
        sellBookStatus &&
        <div>
          <div className="p-10 my-20 mx-30 bg-gray-200">
            <div className="text-center text-3xl font-medium">Book Details</div>
            <div className="md:grid grid-cols-2 mt-10 w-full">
              <div className="px-3">
                <div className="mb-3 px-3">
                  <input type="text" placeholder='Title' className='w-full p-2 rounded placeholder-gray-600 text-black bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" placeholder='Author' className='w-full p-2 rounded placeholder-gray-600 text-black bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" placeholder='' className='w-full p-2 rounded placeholder-gray-600 text-black bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" placeholder='' className='w-full p-2 rounded placeholder-gray-600 text-black bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" placeholder='No.of Pages' className='w-full p-2 rounded placeholder-gray-600 bg-white text-black' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" placeholder='ISBN' className='w-full p-2 rounded placeholder-gray-600 text-black bg-white' />
                </div>
                <div className="mb-3 px-3">
                  <input type="text" placeholder='Image URL' className='w-full p-2 rounded placeholder-gray-600 bg-white text-black' />
                </div>
                <div className="mb-3 px-3">
                  <textarea type="text" rows={'5'} placeholder='Abstract' className='w-full p-2 rounded placeholder-gray-600 bg-white text-black' />
                </div>
              </div>
              <div className="px-3">
                <div className="mb-3 px-3">
                <input type="text" placeholder='Publisher' className='w-full p-2 rounded bg-white placeholder-gray-600 text-black' />
              </div>
              <div className="mb-3 px-3">
                <input type="text" placeholder='Language' className='w-full p-2 rounded bg-white placeholder-gray-600 text-black' />
              </div>
              <div className="mb-3 px-3">
                <input type="text" placeholder='Category' className='w-full p-2 rounded bg-white placeholder-gray-600 text-black' />
              </div>
              <div className="mb-3 px-3">
                <input type="text" placeholder='Category' className='w-full p-2 rounded bg-white placeholder-gray-600 text-black' />
              </div>
              <div className="mb-3 flex justify-center items-center mt-10">
                <label htmlFor="bookImage"></label>
                <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png" alt="book image" height={'200px'} width={'200px'} />
              </div>


              </div>
            </div>
            <div className="p-3 w-full flex md:justify-end justify-center gap-5">
                <button className="px-4 py-2 bg-gray-600 text-white ">Reset</button>
                <button className="p-3 bg-gray-600 text-white">Submit</button>
              </div>
          </div>
        </div>
      }
      {/* Book Status*/}
      {
        bookStatus &&
        <div className="p-10 m-20 shadow rounded">
          {/* duplicate div according to book */}
          <div className="p-5 rounded mt-4 bg-gray-100">
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className="px-4">
                <h1 className="text-2xl">Book Title</h1>
                <h1 className="text-xl">Author</h1>
                <h1 className="text-lg">$ 300</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam consequuntur modi reprehenderit tempore, recusandae voluptatibus neque, quod temporibus commodi minus voluptas, laudantium veniam cupiditate iure cum molestias? Ipsam, nemo!</p>
                <div className="flex">
                  <img height={'150px'} width={'150px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending img" />
                  <img height={'150px'} width={'100px'}  src="https://pngimg.com/uploads/approved/approved_PNG13.png" alt="" />
                </div>
              </div>
              <div className="px-4 mt-4 md:mt-0">
                <img width={'100%'} src="/View.jpg" alt="book" />
                <div className="mt-4 flex justify-end">
                  <button className="p-3 bg-red-600 text-white ">Delete</button>
                </div>
                 
              </div>
            </div>
          </div>


        </div>
      }

      {
        purchaseStatus &&
        <div className="p-10 m-20 shadow rounded">
          {/* duplicate div according to book */}
          <div className="p-5 rounded mt-4 bg-gray-100">
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className="px-4">
                <h1 className="text-2xl">Book Title</h1>
                <h1 className="text-xl">Author</h1>
                <h1 className="text-lg">$ 300</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam consequuntur modi reprehenderit tempore, recusandae voluptatibus neque, quod temporibus commodi minus voluptas, laudantium veniam cupiditate iure cum molestias? Ipsam, nemo!</p>
                <div className="flex">
                  <img height={'150px'} width={'150px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUc-s1TQp1Z9hUJ2QbX5LXsUYpvNgI4i9Fzw&s" alt="pending img" />
              </div>    
              </div>
              <div className="px-4 mt-4 md:mt-0">
                <img width={'100%'} src="/View.jpg" alt="book" />
                <div className="mt-4 flex justify-end">
                  <button className="p-3 bg-red-600 text-white ">Delete</button>
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

export default Profile
