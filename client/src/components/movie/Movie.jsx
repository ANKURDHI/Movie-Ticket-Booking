import React from 'react'
import {Link} from 'react-router-dom'
import './movie.scss'

const Movie = ({movie}) => {
  return (
    // <Link to={'/movie/1/9999-12-31 23:59:59.000000'} className='movie'>
    //      <div className='top'>
    //        <img src="https://assetscdn1.paytm.com/images/cinema/Tiger-3--705x750-d0e91180-6f31-11ee-b230-2d48320d83d4-db9ff0f0-7a3d-11ee-8147-ef6e4eb6a4d7.jpg?format=webp&imwidth=300" alt="movie-image" />
    //      </div>
    //      <div className='bottom'>
    //         <h4>Tiger 3</h4>
    //         <span>U/A . Hindi</span>
    //      </div>
    // </Link>
    // movie/movieId/currentdate
    <Link to={'/movie/1/9999-12-31 23:59:59.000000'} className='movie'>
         <div className='top'>
           <img src={movie.Mpic} alt="movie-image" />
         </div>
         <div className='bottom'>
            <h4>{movie.Name}</h4>
            <span>{movie.Target_Audience} . {movie.Language}</span>
         </div>
    </Link>
  )
}

export default Movie