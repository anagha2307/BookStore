import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye ,faBackward} from '@fortawesome/free-solid-svg-icons'

const ViewBook = () => {
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
                <button className='ms-auto'><FontAwesomeIcon icon={faEye} /></button>
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
      <Footer />
    </>
  )
}

export default ViewBook
