import React, { useState } from 'react'
import Movie from '../movie/Movie'
import './movies.scss';
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import MovieFilter from '../movieFilter/MovieFilter';
import { makeRequest } from '../../utils/axios';
import Carousel from '../carousel/Carousel';

const Movies = () => {
  const [movies, setMovies] = useState([])
  const { isLoading, error, data } = useQuery({    
    queryKey:['movies'],queryFn: async() =>{
      const res = await makeRequest.get(`/movies/allMovies`);
      setMovies(res.data)
      return res.data;
    }
  });
  // {data && setMovies(data)}
  return (
    <div className="movies">
        <h2>Movies</h2>
        <MovieFilter/>
        {/* <Carousel/> */}
        <div className="movies-grid">
          {
            isLoading?"Loading...":movies.map(movie=>{
              return (
                 <Movie key={movie.Movie_ID} movie={movie}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default Movies