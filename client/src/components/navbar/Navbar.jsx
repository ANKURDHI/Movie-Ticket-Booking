import React from 'react'
import './navbar.scss'
import {BiCameraMovie} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'
import {makeRequest} from '../../utils/axios'

const Navbar = () => {
  const {user,logoutUser} = useAuth()
  const navigate = useNavigate();

  const handleClick = async()=>{
    const response = await makeRequest.post(`/auth/logout`);
    console.log(response)
    if(response.status===200){
      logoutUser();
      navigate('/',{replace:'true'})
    } 
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
              {user&&<Link to={'/bookings'}><li>Orders</li></Link>}
            </ul>
          </nav>
        </div>

        {
          user?<Link to={'/'} className='second' onClick={handleClick}>
          Logout
        </Link>:<Link to={'/login'} className='second'>
          Login
        </Link>
        }
      </div>
    </div>
  )
}

export default Navbar