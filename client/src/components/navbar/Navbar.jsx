import React from 'react'
import './navbar.scss'
import {BiCameraMovie} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='first'>
          <Link><BiCameraMovie size={30}/></Link>
          <nav>
            <ul>
              <li>Home</li>
              <li>Movies</li>
              <li>Cinema</li>
              <li>Orders</li>
            </ul>
          </nav>
        </div>

        <Link to={'/login'} className='second'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default Navbar