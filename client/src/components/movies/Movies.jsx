import React from 'react'
import Movie from '../movie/Movie'
import './movies.scss';
import MovieFilter from '../movieFilter/MovieFilter';

const Movies = () => {
  return (
    <div className="movies">
        <h2>Movies</h2>
        <MovieFilter/>
        <div className="movies-grid">
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
        </div>
    </div>
  )
}

export default Movies