import React, { useEffect, useState } from 'react';
import { BsFilter } from 'react-icons/bs';

import './moviefilter.scss';

const MovieFilter = ({data,setMovies}) => {
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

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//    try {
//      const response = await makeRequest.post(`/movies/getGenre`,login);
//    setLogin({
//      email:'',
//      password:''
//    });
//    loginUser(response.data) 
//    if(response.data){
//      navigate('/',{replace:true})
//    }     
//    } catch (err) {
//      setErr(err.response.data)
//    }
// }
  // const filterMovies = () => {
  //   return data.filter((movie) => {
  //     // Check if the movie satisfies the filter conditions
  //     const languageCondition =
  //       (!filterInfo.Language || filterInfo.Language==='All')  || movie.language === filterInfo.Language;
  //     const genreCondition = (!filterInfo.Genre || filterInfo.Genre==='All') || movie.genre === filterInfo.Genre;
  //     const audienceCondition =
  //       (!filterInfo.Audience  || filterInfo.Audience==='All') || movie.audience === filterInfo.Audience;
  
  //     // Return true if all conditions are satisfied
  //     return languageCondition && genreCondition && audienceCondition;
  //   });
  // };

  // useEffect(() => {
  //   const filteredMovies = filterMovies();
  //   // Update the state with filtered movies
  //   // Depending on your application logic, you might want to set the filtered movies in a separate state
  //   // or use it directly where you need it
  //   setMovies(filteredMovies);
  // }, [filterInfo]);

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
              <option value="Select">Select</option>
              <option value="Option2">French</option>
              <option value="Option3">Option 3</option>
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
              <option value="Select">Select</option>
              <option value="Option2">Option 2</option>
              <option value="Option3">Option 3</option>
            </select>
          </div>
          {/* <div className="select-container">
            <label htmlFor="audienceSelect">Audience:</label>
            <select
              id="audienceSelect"
              className="custom-select"
              value={filterInfo.Audience}
              onChange={(e) => handleSelectChange('Audience', e.target.value)}
            >
              <option value="All">1</option>
              <option value="Option2">Option 2</option>
              <option value="Option3">Option 3</option>
            </select>
          </div> */}
        </div>
        </div>

        <div className="buttons">
          <button>Apply</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default MovieFilter;
