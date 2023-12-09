import React, { useEffect, useState } from 'react'
import './moviedetail.scss'
import { FaHeart } from "react-icons/fa";
import { makeRequest } from '../../utils/axios';
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { Link, useNavigate,  useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
// import { useAuth } from '../../context/AuthContext';

const MovieDetail = () => {
  const currentDate = new Date().toJSON().slice(0, 10)

    // const [theatres, setTheatres] = useState([])
     const {movieId} = useParams();

     const { isLoading:movieLoading, error:movieError, data:movieData } = useQuery({    
      queryKey:['movie'],queryFn: async() =>{
        const res = await makeRequest.get(`/movies/getMovie/${movieId}`);
        return res.data;
      }
    });

     const { isLoading, error, data } = useQuery({    
    queryKey:['theatres'],queryFn: async() =>{
      const res = await makeRequest.get(`/theatre/getTheatre/${movieId}/${currentDate}`);
      return res.data;
    }
  });
  
  // Create a map to group screens by theatre ID
  const theatreMap = new Map();
  
  data&&data.forEach((theatre) => {
    const theatreID = theatre.Theatre_ID;
  
    if (!theatreMap.has(theatreID)) {
      theatreMap.set(theatreID, {
        Theatre_ID: theatreID,
        Name_of_Theatre: theatre.Name_of_Theatre,
        Area: theatre.Area,
        No_of_Screens: theatre.No_of_Screens,
        screens: []
      });
    }
  
    const theatreVal = theatreMap.get(theatreID);
    theatreVal.screens.push({
        Screen_ID: theatre.Screen_ID,
        Show_ID: theatre.Show_ID,
        Show_Date: theatre.Show_Date,
        Show_Time: theatre.Show_Time,
        Seats_Remaining: theatre.Seats_Remaining,
        Cost: theatre.Cost
    });
  });
  
  const groupedData = [...theatreMap.values()];
  
  return (
    <div className="movie-detail">
    {
      movieLoading?"Loading...":
      <div className="image-wrapper">
       <img src={movieData[0].Mpic} alt="" />
       <div className="overlay">
           <div className="info">
               <div className="rating"><FaHeart size={20} color='red' /> <span>92%</span> liked this movie</div>
               <h1>{movieData[0].Name}</h1>
               <span>{movieData[0].Target_Audience} . 2h 36m . {movieData[0].Genre} . {movieData[0].Language}</span>
           </div>
       </div>
      </div>
    }

       {/* <div className="topbar">
        <div className="container">
          <h3>Show Listings</h3>
        </div>
       </div> */}

       <div className="booking-filters">
         <div className="container">
         <h3>Show Listings</h3>
           <div className="dates">
              <div className="month"><div>NOV</div></div>
              <div className="day">
                <p>Tue</p>
                <span>14</span>
              </div>
              <div className="day">
                <p>Wed</p>
                <span>15</span>
              </div>
              <div className="day">
                <p>Thu</p>
                <span>16</span>
              </div>
              <div className="day">
                <p>Fri</p>
                <span>17</span>
              </div>
            </div>

            {/* <div className="filters">
              <div className="first">
                <h3>Filter By</h3>
                <button>Hindi <span>&#9662;</span></button>
                <button>Hindi <span>&#9662;</span></button>
                <button>Hindi <span>&#9662;</span></button>
                <button>Hindi <span>&#9662;</span></button>
              </div>
              <div className="second">
                <button>Hindi <span>&#9662;</span></button>
              </div>
            </div> */}
         </div>
       </div>

       <div className="cinemas">
        <div className="container">
            
            <div className="topbar">
                <h3>Cinemas</h3>
                <div className="info">
                    <div className="item">
                        <div></div>
                        <span>AVAILABLE</span>
                    </div>
                    <div className="item">
                        <div></div>
                        <span>FAST FILLING</span>
                    </div>
                    <div className="item">
                        <div></div>
                        <span>ALMOST FULL</span>
                    </div>
                </div>
            </div>

            {
              isLoading?<Loader/>:error?<h3>Error</h3>:(
                <div className='cinema-display'>
                {groupedData &&
                    groupedData.map(theatre => (
                        <div className="cinema" key={theatre.Theatre_ID}>
                            <div className="first">
                                <h3>{theatre.Name_of_Theatre},{theatre.Area}</h3>
                                {/* <div className="btn-group">
                                    <button>Get Directions</button>
                                    <button>More Info</button>
                                </div> */}
                            </div>
                            <div className="second">
                                {theatre.screens.map(screen => (
                                    <Link to={`/seats/${screen.Show_ID}/${screen.Screen_ID}`} className="item" key={screen.Screen_ID}>
                                        <div>
                                            <h4>{screen.Show_Time}</h4>
                                            {/* <span>2D</span> */}
                                        </div>
                                        {/* <div>
                                            RECLINER
                                        </div> */}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
              )
            }

        </div>
       </div>

    </div>
  )
}

export default MovieDetail