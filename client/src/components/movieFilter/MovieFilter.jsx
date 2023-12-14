import React, { useEffect, useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import './moviefilter.scss';
import { makeRequest } from '../../utils/axios';

const MovieFilter = ({genres,languages,setMovies,setMovieError,mutation}) => {
  const [filterInfo, setFilterInfo] = useState({
    Language: "",
    Genre: "",
  });

  const handleSelectChange = (category, value) => {
    setFilterInfo((prevFilterInfo) => ({
      ...prevFilterInfo,
      [category]: value,
    }));
  };
  // const queryClient = useQueryClient();
  // const mutation = useMutation({  
  //   mutationFn:(clicked) => {
  //     return;
  //  }, 
  //    onSuccess: () => {
  //      queryClient.invalidateQueries("movies")
  //    },
  // })

  const handleReset = () => {
    setFilterInfo(
      {
        Language: "",
        Genre: "",
      }
    )
    setMovieError("")
    mutation.mutate(true);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await makeRequest.post(`/movies/filter`,filterInfo);
      if(response.data.length>0){
        setMovies(response.data)
      }else {
        setMovieError("No Such Movies.")
      }    
    } catch (err) {
      console.log(err)
    }
}
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//    try {
//     useQuery({    
//       queryKey:['filteredMovies'],queryFn: async() =>{
//         const res = await makeRequest.post(`/movies/filter`,filterInfo);
//         setMovies(res.data)
//         return;
//       }
//     });   
//    } catch (err) {
//      console.log(err)
//    }
// }

  return (
    <div className="filter">
      <div className="movie-filter">
        <div className='movie-filter-first'>
        <div className='start'>
          <BsFilter size={20} />
        </div>
        <div className="choices">
          <div className="select-container">
            <label htmlFor="languageSelect">Language:</label>
            <select
              id="languageSelect"
              className="custom-select"
              value={filterInfo.Language}
              onChange={(e) => handleSelectChange('Language', e.target.value)}
            >
              <option value=""></option>
              {
                languages.map(language=>(
                  <option value={language}>{language}</option>
                ))
              }
              {/* <option value="French">French</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="German">German</option>
              <option value="Japanese">Japanese</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option> */}
            </select>
          </div>
          <div className="select-container">
            <label htmlFor="genreSelect">Genre:</label>
            <select
              id="genreSelect"
              className="custom-select"
              value={filterInfo.Genre}
              onChange={(e) => handleSelectChange('Genre', e.target.value)}
            >
              <option value=""></option>
              {
                genres.map(genre=>(
                  <option value={genre}>{genre}</option>
                ))
              }
              {/* <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Thriller">Thriller</option>     */}
            </select>
          </div>
        </div>
        </div>

        <div className="buttons">
          <button onClick={handleSubmit}>Apply</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default MovieFilter;
