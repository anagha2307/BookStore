import { useEffect, useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Users/Pages/Home'
import Preloader from './Components/Preloader'
import Auth from './Pages/Auth'
import AllBooks from './Users/Pages/AllBooks'
import Careers from './Users/Pages/Careers'
import Contact from './Users/Pages/Contact'
import Profile from './Users/Pages/Profile'
import Viewbook from './Users/Pages/ViewBook'
import AdminDashBoard from './Admin/Pages/AdminDashBoard'
import CareerAdmin from './Admin/Pages/CareerAdmin'
import ResourceAdmin from './Admin/Pages/ResourceAdmin'
import SettingAdmin from './Admin/Pages/SettingAdmin'

function App() {
  const [loading,setLoading] = useState(true)

  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false)
    },7000)
  },[])

  return (
    <>
    <Routes>
      <Route path='/' element={loading? <Preloader/> : <Home/>}/>
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth register/>} />
      <Route path='/all-books' element={<AllBooks/>} />
      <Route path='/books/:id/view' element={<Viewbook/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/careers' element={<Careers/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/admin-dashboard' element={<AdminDashBoard/>} />
      <Route path='/admin-careers' element={<CareerAdmin/>} />
      <Route path='/admin-resources' element={<ResourceAdmin/>} />
      <Route path='/admin-settings' element={<SettingAdmin/>} />
    
    </Routes>

      
    </>
  )
}

export default App
