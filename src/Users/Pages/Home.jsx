import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'


const Home = () => {
  return (
    <div>
      <Header/>
      {/* landing */}
      <div className="flex flex-col h-screen justify-center items-center bg-[url(/background-image.png)]
        bg-cover text-white">
        <h1 className="text-5xl font-bold">Wonderful Gifts</h1>
        <p>Give your family and friends a book</p>
        <div className="mt-9">
          <input type="text"  placeholder='Search Books'/>
        </div>
      </div>
      {/* arrival section */}
      {/* author */}
      {/* testimonial */}
      
      <Footer/>
      
    </div>
  )
}

export default Home
