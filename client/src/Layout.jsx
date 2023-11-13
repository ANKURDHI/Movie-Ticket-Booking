import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const Layout = () => {
  return (
    <div className='app'>
        <Navbar/>
        <main>
           <div className="container">
              <Outlet/>
           </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout