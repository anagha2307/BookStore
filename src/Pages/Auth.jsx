import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Auth = ({register}) => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-[url(https://images.wallpaperscraft.com/image/single/book_flowers_bouquet_198229_1350x2400.jpg)]
    bg-cover bg-left'>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center">BOOK STORE</h1>
        <div style={{width:'500px'}} className="shadow p-5 bg-black text-white flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faUser} className='border border-white p-3 text-center rounded-full text-xl' />
          <h3 className='mt-3 text-2xl'>{register?"Register":"Login"}</h3>

          <form className='my-5 w-full'>
            {
              register &&
            <input type="text" placeholder='Username' className="w-full bg-white p-2 rounded placeholder-gray-500 focus:outline-none text-gray-600"/>

            }
            <input type="email" placeholder='Email ID' className="w-full bg-white p-2 rounded placeholder-gray-500 focus:outline-none text-gray-600 my-5"/>
            <input type="password" placeholder='Password' className="w-full bg-white p-2 rounded placeholder-gray-500 focus:outline-none text-gray-600"/>
            <div className="flex justify-between mb-5">
              <p className="text-sm text-orange-300">*Never share your password with others</p>
              <button className="text-sm underline">Forget Password</button>
            </div>
            <div className="text-center">
              {
                register?
                <button className="bg-green-700 p-2 w-full rounded">Register</button>
                :
                <button className="bg-green-700 p-2 w-full rounded">Login</button>
              }
            </div>
            {/* google authnetication */}

            <div className="my-5 text-center">
            {
              register ?
              <p className="text-blue-600">Are you already a User ?
              <Link to ={'/login'} className="underline ms-5">Login</Link></p>
              :
              <p className="text-blue-600">Are you a New User ?
              <Link to ={'/register'} className="underline ms-5">Register</Link></p>
            }
            </div>
          </form>

        </div>
      </div>
      
    </div>
  )
}

export default Auth
