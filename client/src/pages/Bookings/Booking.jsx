import React from 'react'
import './booking.scss'
// import {
//   useQuery,
//   useMutation,
//   useQueryClient
// } from '@tanstack/react-query'
// import { makeRequest } from '../../utils/axios';

const Booking = () => {
  // const { isLoading, error, data } = useQuery({    
  //   queryKey:['order'],queryFn: async() =>{
  //     const res = await makeRequest.get(`/booking/getBooking/${showId}/${screenId}`);
  //     return res.data;
  //   }
  // });
  return (
    <div className="bookings">
     <div className="container">
      <h2>Your Bookings</h2>
       <div className="booking">
        <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWV8ZW58MHx8MHx8fDA%3D" alt="" />
        <div className="info">
          <h3>Movie 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi beatae dolore modi id culpa porro sapiente eligendi ea necessitatibus dolores nemo, maxime voluptatum quis eum sequi enim vitae aspernatur!</p>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Booking