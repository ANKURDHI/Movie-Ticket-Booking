import React from 'react'
import './home.scss'
import Movies from '../../components/movies/Movies'

function Home() {
  return (
    <div className="home">
      <div className="container">
      <Movies/>
      </div>
    </div>
  )
}

export default Home