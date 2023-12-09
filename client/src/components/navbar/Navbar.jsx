import React from 'react'
import './navbar.scss'
import {BiCameraMovie} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

const Navbar = () => {
  const {user,logoutUser} = useAuth()
  const navigate = useNavigate();

  const handleClick = ()=>{
     logoutUser();
    navigate('/',{replace:'true'})
  }

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

        {
          user?<button className='second' onClick={handleClick}>
          Logout
        </button>:<Link to={'/login'} className='second'>
          Login
        </Link>
        }
      </div>
    </div>
  )
}

export default Navbar