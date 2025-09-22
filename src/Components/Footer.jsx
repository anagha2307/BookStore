import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>

      <div className='bg-blue-950 text-white py-8 mt-48'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 px-5 py-10 gap-15">
          <div>
            <h2 className='text-md mb-2'>ABOUT</h2>
            <p className='max-w-xs' style={{fontSize: '12px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis numquam enim ipsum debitis quae, laudantium recusandae molestiae at facilis quidem ut error quas maiores quasi! Modi est laudantium nesciunt.</p>
          </div>
          <div>
            <h2 className='text-md mb-2'>NEWSLETTER</h2>
            <h4 className='text-sm'>Stay updated with our latest trends</h4>
            <div className=" mt-2 flex">
              <input
                type="email"
                required
                className="flex-1 px-4 py-1 bg-white focus:outline-none text-black"
              />
              <button
                type="submit"
                className="px-4 py-1 hover:bg-yellow-300 flex items-center justify-center"
                style={{ backgroundColor: "#F9FD18" }}
              >
                <FontAwesomeIcon icon={faArrowRight} className="text-black" />
              </button>
            </div>

          </div>
          <div className='mx-10'>
            <h2 className='text-lg my-2 mb-2'>FOLLOW US</h2>
            <h4 className='text-sm'>Let us be social</h4>
            <div className="flex text-xl space-x-2 mt-3">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-950 text-white p-5">
          <h5 className='text-center text-xs'>Copyright &copy; 2025 All Rights Reserved | This website is made 
            with   <FontAwesomeIcon icon={faHeart} className='text-rose-500' />  by Anagha Varghese </h5>
      </div>
    </>
  )
}

export default Footer
