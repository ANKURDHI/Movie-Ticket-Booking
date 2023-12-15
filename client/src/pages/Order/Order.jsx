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
 
  const handleSubmit = async(e) => {
    e.preventDefault();
   try {
     const response = await makeRequest.post(`/payment`,{ 
      movieName:data[0].Name,
      price:data[0].Price,
      tickets:seatIds.length,
      Screen_ID:screenId,
      Show_ID:showId,
      Seat_IDs:seatIds 
    });
   if(response.data){
     navigate(`${response.data.url}`,{replace:true})
   }     
   } catch (err) {
     console.log(err.response.data)
   }
}
{data&&console.log(data[0].Show_Date)}
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
                    <div className="snacks">
                      <h3>Add Snacks</h3>
                      <div className="items">
                        <div className="item">
                          <img src="data:image/jpeg;base64,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" alt="" />
                          <div className="item-info">
                             <div className="one">
                              <h5>Nachos+Coke Combo</h5>
                              <p>Rs 129</p>
                             </div>
                             <div className="second">
                              <div>+</div>
                             </div>
                          </div>                        
                        </div>
                        <div className="item">
                          <img src="data:image/jpeg;base64,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" alt="" />
                          <div className="item-info">
                             <div className="one">
                              <h5>Nachos+Coke Combo</h5>
                              <p>Rs 129</p>
                             </div>
                             <div className="second">
                              <div>+</div>
                             </div>
                          </div>                        
                        </div>
                      </div>
                    </div>
                    <div className="booking-second">
                       <p><span>Total</span><span>Rs {total+taxes}</span></p>
                       <button onClick={handleSubmit}>Proceed to Pay Rs {total+taxes}</button>
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