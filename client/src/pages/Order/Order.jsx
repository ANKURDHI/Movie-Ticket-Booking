import React, { useState } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { makeRequest } from '../../utils/axios';
import './order.scss'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader'

const Order = () => {
  const [seatIds, setSeatIds] = useState([])
  const {showId,screenId} = useParams()
  const { isLoading, error, data } = useQuery({    
    queryKey:['order'],queryFn: async() =>{
      const res = await makeRequest.get(`/booking/getBooking/${showId}/${screenId}`);
      const seats = res.data.map(item=>item.Seat_ID);
      setSeatIds(seats)
      return res.data;
    }
  });
  console.log(data)
  const total = data&&data[0].Price*seatIds.length;
  const taxes = (total*5)/100;
 
  return (
    <div className="order">
        <div className="container">
            <div className="timer">
                <span>Session expires in 3:00</span>
            </div>
            {
              isLoading?<Loader/>:error?<h3>Try Again</h3>:(
                <div className="details">
                <div className="first">
                    <div className="image">
                      <img src={data&&data[0].Mpic} alt="movie-image" />
                    </div>
                    <div className="info">
                       <div className="main">
                           <h3>{data&&data[0].Name}</h3>
                           <div className="tags">
                             <span>{data&&data[0].Genre}</span>
                             <span>{data&&data[0].Language}</span>
                             <span>{data&&data[0].Target_Audience}</span>
                           </div>
                       </div>
                       <div className="theatre">
                        <h4>{data&&data[0].Name_of_Theatre}</h4>
                        <p>
                            {data&&data[0].Area}
                         </p>
                       </div>
                       <div className="timing">
                        <div className="first">
                            {/* <h3>Fri, 01Dec, 11:00 AM</h3> */}
                            {
                              seatIds&&seatIds.map(id=>(
                                <p key={id}>SCREEN {data&&data[0].Screen_ID},SEAT {id}</p>
                              ))
                            }
                        </div>
                        {/* <div className="second">
                            <span>1</span>
                            <span>TICKET</span>
                        </div> */}
                       </div>
                    </div>
                </div>

                <div className="booking">
                    <div className="booking-first">
                      <h3>Booking Summary</h3>
                      <div>
                        <p><span>{seatIds&&seatIds.length} {seatIds&&seatIds.length>0?'Tickets':'Ticket'}</span><span>Rs {data&&data[0].Price}</span></p>
                        <p><span>Taxes & Fees</span><span>Rs {data&&taxes}</span></p>
                      </div>
                    </div>
                    <div className="booking-second">
                       <p><span>Total</span><span>Rs {total+taxes}</span></p>
                       <button>Proceed to Pay Rs {total+taxes}</button>
                    </div>
                </div>
            
            </div>
              )
            }
        </div>
    </div>
  )
}

export default Order