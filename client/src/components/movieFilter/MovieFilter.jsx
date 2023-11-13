import React from 'react'
import {BsFilter} from'react-icons/bs'
import {BiDownArrow,BiMovie} from'react-icons/bi'
import {GrCircleInformation} from'react-icons/gr'
import {AiOutlineSortAscending} from'react-icons/ai'
import {LiaLanguageSolid} from'react-icons/lia'

import './moviefilter.scss'

const MovieFilter = () => {
  return (
    <div className="movie-filter">
       <div className='start'>
        <BsFilter/>
         Filter
       </div>

       <div className="option">
         <LiaLanguageSolid/>
         Languages
         <BiDownArrow/>
       </div>
       <div className="option">
         <GrCircleInformation/>
         Format
         <BiDownArrow/>
       </div>
       <div className="option">
         <AiOutlineSortAscending/>
         Sort
         <BiDownArrow/>
       </div>
       <div className="option">
         <BiMovie/>
         Genres
         <BiDownArrow/>
       </div>
    </div>
  )
}

export default MovieFilter