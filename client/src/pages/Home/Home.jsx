import React, { useEffect } from 'react'
import './home.scss'
import Movies from '../../components/movies/Movies'
// import { makeRequest } from '../../utils/axios';
// import { Link, useNavigate} from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
function Home() {
  // const navigate = useNavigate();
  // const { user,loginUser } = useAuth();
  // console.log(user)
  // useEffect(() => {
  //   if (!user) {
  //     async function fetchData(){
  //       try {
  //         const res = await makeRequest.get(`/users/refetch`);
  //         loginUser(res.data)
  //       } catch (error) {
  //         // console.log(error);
  //         navigate('/login');
  //       }
  //     }
  //     fetchData();
  //   }
  // }, [user, navigate]);
  return (
    <div className="home">
      {/* <div className="container"> */}
      <Movies/>
      {/* </div> */}
    </div>
  )
}

export default Home