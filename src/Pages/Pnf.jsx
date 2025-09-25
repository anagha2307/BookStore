import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-full'>
      <h1>Oh No!</h1>
      <h1 className="text-3xl font-semibold">Look Like You're Lost</h1>
      <p>The page you are looking is not available</p>
      <Link to={'/'} className="bg-blue-950 p-2 text-center rounded text-white my-2 mb-0 hover:border-blue-950 hover:bg-white  hover:text-black">Back to Home</Link>
      
    </div>
  )
}

export default Pnf
