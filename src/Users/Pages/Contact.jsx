import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'



const Contact = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-center my-6">Contacts</h1>
        <p className='md:text-center text-justify md:text-sm text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint soluta tenetur ullam ipsum, ipsam a est odit ducimus sit asperiores sapiente id, nobis aperiam eligendi incidunt! Eos ipsum sequi modi?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint soluta tenetur ullam ipsum, ipsam a est odit ducimus sit asperiores sapiente id, nobis aperiam eligendi incidunt! Eos ipsum sequi modi?
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 mx-10 p-10 md:gap-0 gap-10">
          <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} className='text-black text-2xl bg-gray-200 px-3 py-3 rounded-full' />
              <h1>123 Main Street, Apt 4B, Anytown, CA 91324</h1>
          </div>
          <div className="flex items-center gap-3" style={{width:'50px',height:'50px'}} >
              <FontAwesomeIcon icon={faPhone} className='text-black text-2xl bg-gray-200 p-3 rounded-full' />
              <h1>+ 91   9876543210</h1>
          </div>
          <div className="flex items-center gap-3" style={{width:'50px',height:'50px'}} >
              <FontAwesomeIcon icon={faEnvelopeOpen} className='text-black text-2xl bg-gray-200 p-3 rounded-full' />
              <h1>Bookstore@gmail.com</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:m-10 m-5 md:p-10 p-2 gap-8">
          <form action="" className='bg-gray-400 p-3 md:w-full rounded'>
            <h1 className='text-center font-bold my-3 text-xl'>Send me message</h1>
            <input type="text" placeholder='Name' className="w-full bg-white p-2 rounded placeholder-gray-500 focus:outline-none text-gray-600 my-2"/>
            <input type="email" placeholder='Email ID' className="w-full bg-white p-2 rounded placeholder-gray-500 focus:outline-none text-gray-600 my-2"/>
            <textarea type="text" rows='4' placeholder='Message'className="w-full bg-white p-2 rounded placeholder-gray-500 focus:outline-none text-gray-600 my-2"/>
              <button className="bg-blue-950 p-2 w-full rounded text-white mb-0">Send 
                <FontAwesomeIcon icon={faTelegram} />
              </button>
          </form>
          <div className='w-full h-full'>
            <img src="/map.png" alt="Map" className='w-full' />
          </div>
        </div>
      </div>
      
      <Footer />

    </>
  )
}

export default Contact
