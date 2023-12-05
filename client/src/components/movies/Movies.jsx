import React from 'react'
import Movie from '../movie/Movie'
import './movies.scss';
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import MovieFilter from '../movieFilter/MovieFilter';
import { makeRequest } from '../../utils/axios';

const Movies = () => {
  const { isLoading, error, data } = useQuery({    
    queryKey:['movies'],queryFn: async() =>{
      const res = await makeRequest.get(`/movies/allMovies`);
      return res.data;
    }
  });
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