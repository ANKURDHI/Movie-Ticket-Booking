import React from 'react'
import './booking.scss'
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { makeRequest } from '../../utils/axios';

const Booking = () => {
  const { isLoading, error, data } = useQuery({    
    queryKey:['getbookings'],queryFn: async() =>{
      const res = await makeRequest.get(`/booking/getBookings`);
      return res.data;
    }
  });
  console.log(data)
  return (
    <div className="bookings">
     <div className="container">
      <h2>Your Bookings</h2>
       <div className="booking">
        <img src={data&&data[0].Mpic} alt="" />
        <div className="info">
          <h3>{data&&data[0].Name}</h3>
          <p>{data&&data[0].Name_of_Theatre}</p>
          <p>Time:{data&&data[0].Show_Time}</p>
          <p>No. of tickets: {data&&data[0].No_of_Tickets}</p>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Booking