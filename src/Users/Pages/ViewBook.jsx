import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBackward, faXmark, faCamera } from '@fortawesome/free-solid-svg-icons'

const ViewBook = () => {
  const [modalstatus, setModalstatus] = useState(false)
  return (
    <>
      <Header />
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4">
            <div className="col-span-1">
              <img src="/View.jpg" alt="book View" className='p-3' />
            </div>
            <div className="col-span-3">
              <div className='flex justify-center'>
                <h1 className="text-xl font-bold my-3">Title</h1>
                <button onClick={() => setModalstatus(true)} className='ms-auto'><FontAwesomeIcon icon={faEye} /></button>
              </div>
              <p className="my-3 text-blue-600">Author</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold">Publisher:demo</p>
                <p className="font-bold">Language:demo</p>
                <p className="font-bold">No.of Pages:demo</p>
                <p className="font-bold">Seller Mail:demo</p>
                <p className="font-bold">Real Price:demo</p>
                <p className="font-bold">ISBN:demo</p>
              </div>
              <div className="d:my-10 my-4">
                <p className="font-bold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim, voluptas dignissimos deleniti temporibus labore delectus quibusdam tempore totam quae commodi, natus alias! Aliquam, quaerat odio aspernatur deserunt sint tempore.</p>
              </div>
              <div className="flex justify-end">
                <button className="bg-blue-900 text-white px-3 rounded"><FontAwesomeIcon icon={faBackward} className='me-3' />Back</button>
                <button className="bg-green-900 text-white p-2 rounded ms-5">Buy $ 123</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* modal */}
      {
        modalstatus &&
        <div className="relative z-10">
          <div className="bg-gray-500/75 fixed inset-0">
            <div className="flex justify-center items-center min-h-screen">
              <div className="bg-white rounded" style={{height:'500px',width:'900px'}}>
                <div className='bg-black text-white flex justify-between items-center p-3'>
                  <h3>Book Images</h3>
                  <FontAwesomeIcon onClick={() => setModalstatus(false)} icon={faXmark} />
                </div>
               <p className="text-blue-700 m-4">
                <FontAwesomeIcon icon={faCamera} className='me-2' />
                Camera Click of the book in the hand of seller
              </p>
              <div className="md:flex">
                {/* duplicate images */}
                <img src="/View.jpg" alt="book images" className='mx-2 my-5'  width={'250px'} height={'250px'} />
                <img src="/View.jpg" alt="book images" className='mx-2 my-5'  width={'250px'} height={'250px'} />
                <img src="/View.jpg" alt="book images" className='mx-2 my-5'  width={'250px'} height={'250px'} />
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

export default ViewBook
