import React from 'react'
import {Link} from 'react-router-dom'
import './movie.scss'

const Movie = ({movie}) => {
  return (
    <Link to={`/movie/${movie.Movie_ID}`} className='movie'>
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