import React from 'react'
import {BsFilter} from'react-icons/bs'
import {BiDownArrow,BiMovie} from'react-icons/bi'
import {GrCircleInformation} from'react-icons/gr'
import {AiOutlineSortAscending} from'react-icons/ai'
import {LiaLanguageSolid} from'react-icons/lia'

import './moviefilter.scss'

const MovieFilter = () => {
  return (
    <div className="filter">
       <div className="movie-filter">
          <div className='start'>
            <BsFilter size={20}/>
          </div>
          <div className="choices">
            <div className="select-container">
              <label htmlFor="beautifulSelect"></label>
              <select id="beautifulSelect" className="custom-select">
                <option value="option1">Language</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="select-container">
              <label htmlFor="beautifulSelect"></label>
              <select id="beautifulSelect" className="custom-select">
                <option value="option1">Genre</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="select-container">
              <label htmlFor="beautifulSelect"></label>
              <select id="beautifulSelect" className="custom-select">
                <option value="option1">Format</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
       </div>
      {/* <div cla>
        ldks;
      </div> */}
    </div>
  )
}

export default MovieFilter