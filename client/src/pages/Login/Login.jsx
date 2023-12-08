import React,{useState} from 'react'
import './login.scss';
import { Link,useNavigate } from 'react-router-dom'
import { makeRequest } from '../../utils/axios';
import {useAuth} from '../../context/AuthContext'
// import axios from 'axios';

function Login() {
  const {loginUser} = useAuth();
  const [login, setLogin] = useState({
    email:'',
    password:''
})
const [err, setErr] = useState(null)
const navigate = useNavigate();
const handleSubmit = async(e) => {
     e.preventDefault();
    try {
      const response = await makeRequest.post(`/auth/login`,login);
    setLogin({
      email:'',
      password:''
    });
    loginUser(response.data) 
    if(response.data){
      navigate('/',{replace:true})
    }     
    } catch (err) {
      setErr(err.response.data)
    }
}

const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value
    }));
  };
  return (
    <div className="login">
    <div className='card'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input type="email" name='email' placeholder='Email' onChange={handleChange}/>
        
          <label htmlFor="password"></label>
          <input type='password'  name='password' placeholder='Password' onChange={handleChange}/>
          {/* {err && err} */}
          <button className='btn btn-primary'>Login</button>
        </form>
        <span>Don't have an account?<Link to={'/register'}>Sign Up</Link></span>
   </div>
</div>
  )
}

export default Login