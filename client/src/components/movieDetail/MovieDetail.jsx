import React from 'react'
import './moviedetail.scss'
import { FaHeart } from "react-icons/fa";
// import {
//   useQuery,
//   useMutation,
//   useQueryClient
// } from '@tanstack/react-query'

const MovieDetail = () => {
     // const { isLoading, error, data } = useQuery({    
  //   queryKey:['theatres'],queryFn: async() =>{
  //     const res = await makeRequest.get(`/theatre`);
  //     return res.data;
  //   }
  // });
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

       <div className="topbar">
        <div className="container">
            <div className="first">
               <li>Showlisting</li>
               <li>About Movie</li>
               <li>Reviews</li>
            </div>
            <div className="second">
                  <div className="liked">
                   <div><FaHeart size={20} color='red' /> </div>
                   <div className='info'>
                    <span>92%</span>
                    <p>liked this movie</p> 
                   </div>
                  </div>
                  <div className="btn-group">
                    <button><FaHeart/> Like</button>
                    <button><FaHeart/> Dislike</button>
                  </div>
            </div>
        </div>
       </div>

       <div className="booking-filters">
         <div className="container">
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

            <div className="filters">
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
            </div>
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
              
              <div className="cinema">
                <div className="first">
                    <h3>INOX Sapphire 90 Mall,Gurugram</h3>
                    <div className="btn-group">
                        <button>Get Directions</button>
                        <button>More Info</button>
                    </div>
                </div>
                <div className="second">
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="cinema">
                <div className="first">
                    <h3>INOX Sapphire 90 Mall,Gurugram</h3>
                    <div className="btn-group">
                        <button>Get Directions</button>
                        <button>More Info</button>
                    </div>
                </div>
                <div className="second">
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="cinema">
                <div className="first">
                    <h3>INOX Sapphire 90 Mall,Gurugram</h3>
                    <div className="btn-group">
                        <button>Get Directions</button>
                        <button>More Info</button>
                    </div>
                </div>
                <div className="second">
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="cinema">
                <div className="first">
                    <h3>INOX Sapphire 90 Mall,Gurugram</h3>
                    <div className="btn-group">
                        <button>Get Directions</button>
                        <button>More Info</button>
                    </div>
                </div>
                <div className="second">
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="cinema">
                <div className="first">
                    <h3>INOX Sapphire 90 Mall,Gurugram</h3>
                    <div className="btn-group">
                        <button>Get Directions</button>
                        <button>More Info</button>
                    </div>
                </div>
                <div className="second">
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="cinema">
                <div className="first">
                    <h3>INOX Sapphire 90 Mall,Gurugram</h3>
                    <div className="btn-group">
                        <button>Get Directions</button>
                        <button>More Info</button>
                    </div>
                </div>
                <div className="second">
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                    <div className="item">
                        <div>
                           <h4>08:20 PM</h4>
                           <span>2D</span>
                        </div>
                        <div>
                            RECLINER
                        </div>
                    </div>
                </div>
              </div>

            </div>
        </div>
       </div>

    </div>
  )
}

export default MovieDetail