import React, { useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './register.scss'
import { makeRequest } from '../../utils/axios'

function Register() {
    const [register, setRegister] = useState({
        user:'',
        first_name:'',
        last_name:'',
        password:'',
        email:''
    })
    const [err, setErr] = useState(null)
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault()
       try {
        makeRequest.post
        const data = await makeRequest.post(`/auth/register`,register);
        setRegister({
          user:'',
          first_name:'',
          last_name:'',
          password:'',
          email:''
      })
      console.log(data)
        if(data) navigate('/login');
       } catch (err) {
        setErr(err.message)
       }
    }
    console.log(err)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister((prevRegister) => ({
          ...prevRegister,
          [name]: value
        }));
      };

  return (
    <div className="register">
        <div className='card'>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="user"></label>
            <input type="text" name='user' placeholder='Username' onChange={handleChange}/>
            <label htmlFor="first_name"></label>
            <input type="text"  name='first_name' placeholder='First Name' onChange={handleChange}/>
            <label htmlFor="last_name"></label>
            <input type="text"  name='last_name' placeholder='Last Name' onChange={handleChange}/>
            <label htmlFor="email"></label>
            <input type="email"  name='email' placeholder='Email' onChange={handleChange}/>
            <label htmlFor="password"></label>
            <input type="password"  name='password' placeholder='Password' onChange={handleChange}/>
            {/* {err && <>{err}</>} */}
            <button className='btn btn-primary'>Sign Up</button>
            <p>Already have an account?<Link to={'/login'}>Login</Link></p>
        </form>      
    </div>
    </div>
  )
}

export default Register