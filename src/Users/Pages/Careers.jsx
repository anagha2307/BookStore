import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'

const Careers = () => {
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
        <div class="max-w-4xl shadow mx-auto px-5">
          <h1 className='my-5 text-xl p-5'>Job Title</h1>
          
        </div>



      </div>

      <Footer />

    </>
  )
}

export default Careers
