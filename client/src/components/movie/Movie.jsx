import React from 'react'
import {Link} from 'react-router-dom'
import './movie.scss'

const Movie = () => {
  return (
    <Link className='movie'>
         <div className='top'>
           <img src="https://assetscdn1.paytm.com/images/cinema/Tiger-3--705x750-d0e91180-6f31-11ee-b230-2d48320d83d4-db9ff0f0-7a3d-11ee-8147-ef6e4eb6a4d7.jpg?format=webp&imwidth=300" alt="movie-image" />
         </div>
         <div className='bottom'>
            <h4>Tiger 3</h4>
            <span>U/A . Hindi</span>
         </div>
    </Link>
  )
}

export default Movie