import React,{useState} from 'react'
import './login.scss';
import { Link,useNavigate } from 'react-router-dom'
// import {useAuth} from '../../context/AuthContext'
// import axios from 'axios';

function Login() {
//   const {loginUser} = useAuth();
//   const [login, setLogin] = useState({
//     email:'',
//     password:''
// })
// const [err, setErr] = useState(null)
// const navigate = useNavigate();
// const handleSubmit = async(e) => {
//      e.preventDefault();
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_SERVER_PORT_URL}/api/auth/login`,login,{
//       withCredentials:true
//     });
//     setLogin({
//       email:'',
//       password:''
//     });
//     loginUser(response.data)        
//     navigate('/home',{replace:true})
//     } catch (err) {
//       setErr(err.response.data)
//     }
// }

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLogin((prevLogin) => ({
//       ...prevLogin,
//       [name]: value
//     }));
//   };
  return (
    <div className="login">
    <div className='card'>
        <h1>Login</h1>
        <form>
          <label htmlFor="email"></label>
          <input type="email" name='email' placeholder='Email'/>
          <label htmlFor="password"></label>
          <input  name='password' placeholder='Password' />
          {/* {err && err} */}
          <button className='btn btn-primary'>Login</button>
        </form>
        <span>Don't have an account?<Link to={'/register'}>Sign Up</Link></span>
   </div>
</div>
  )
}

export default Login