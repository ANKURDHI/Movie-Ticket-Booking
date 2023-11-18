import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import MovieDetail from './components/movieDetail/MovieDetail'
import SeatsBook from './pages/Seats/SeatsBook'

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
        path:'/seats',
        element:<SeatsBook/>
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
    <RouterProvider router={router}/>
  )
}

export default App
