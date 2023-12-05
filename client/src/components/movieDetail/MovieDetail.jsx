import React, { useState } from 'react'
import './moviedetail.scss'
import { FaHeart } from "react-icons/fa";
import { makeRequest } from '../../utils/axios';
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom';

const MovieDetail = () => {
    const [theatres, setTheatres] = useState([])
     const {movieId,date} = useParams();
     const { isLoading, error, data } = useQuery({    
    queryKey:['theatres'],queryFn: async() =>{
      const res = await makeRequest.get(`/theatre/getTheatre/1/9999-12-31 23:59:59.000000`);
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
       <div className="image-wrapper">
        <img src="https://assetscdn1.paytm.com/images/cinema/Tiger-3--705x750-d0e91180-6f31-11ee-b230-2d48320d83d4-db9ff0f0-7a3d-11ee-8147-ef6e4eb6a4d7.jpg?format=webp&imwidth=300" alt="" />
        <div className="overlay">
            <div className="info">
                <div className="rating"><FaHeart size={20} color='red' /> <span>92%</span> liked this movie</div>
                <h1>Tiger 3</h1>
                <span>U/A . 2h 36m . Action,Spy,Thriller . Hindi,Tamil,Telugu</span>
            </div>
        </div>
       </div>

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
                                    <Link to={`/seats/${screen.Show_ID}`} className="item" key={screen.Screen_ID}>
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

        </div>
       </div>

    </div>
  )
}

export default MovieDetail