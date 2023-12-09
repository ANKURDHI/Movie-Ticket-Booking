import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import {useAuth} from './context/AuthContext'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {createBrowserRouter,RouterProvider,useNavigate} from 'react-router-dom'
import Layout from './Layout'
import MovieDetail from './components/movieDetail/MovieDetail'
import SeatsBook from './pages/Seats/SeatsBook'
import Order from './pages/Order/Order'
import { makeRequest } from './utils/axios'

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  const { user,loginUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await makeRequest.get(`/users/refetch`);
        loginUser(res.data);
      } catch (error) {
        console.log(error);
        navigate('/login');
      }
    }

    if (!user) {
      fetchData();
    }
  }, [user, navigate, loginUser]);

  return user ? children : null;
};

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'movie/:movieId',
        element:<MovieDetail/>
      },
      {
        path:'/seats/:showId/:screenId',
        element:<ProtectedRoute>
          <SeatsBook/>
        </ProtectedRoute>
      },
      {
        path:'/order/:showId/:screenId',
        element:<ProtectedRoute>
          <Order/>
        </ProtectedRoute>
      },
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
     </QueryClientProvider>
  )
}

export default App
