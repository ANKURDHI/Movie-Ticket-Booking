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
import Loader from '../Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [movieError, setMovieError] = useState("")
  let languages;
  let genres;
  const { isLoading, error, data } = useQuery({    
    queryKey:['movies'],queryFn: async() =>{
      const res = await makeRequest.get(`/movies/allMovies`);
      setMovies(res.data)
      return res.data;
    }
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({  
    mutationFn:(clicked) => {
      return;
   }, 
     onSuccess: () => {
       queryClient.invalidateQueries("movies")
     },
  })

  if(data){
    languages = Array.from(new Set(data.map(item=>item.Language)));
    genres = Array.from(new Set(data.map(item=>item.Genre)));
  }

  return (
    isLoading?<Loader/>:(<div className="movies">
        <h2>Movies</h2>
        <MovieFilter genres={genres} languages={languages} setMovies={setMovies} mutation={mutation} setMovieError={setMovieError}/>
        {/* <Carousel/> */}
        {
          movieError?movieError:(
            <div className="movies-grid">
              {
                movies.map(movie=>{
                  return (
                    <Movie key={movie.Movie_ID} movie={movie}/>
                  )
                })
              }
            </div>
          )
        }
    </div>
  ))
}

export default Movies