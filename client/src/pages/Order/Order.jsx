import React, { useState } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { makeRequest } from '../../utils/axios';
import './order.scss'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader'

const Order = () => {
  // const navigate = useNavigate()
  const [seatIds, setSeatIds] = useState([])
  const [totalCost, setTotalCost] = useState(200);
  const [tax, setTax] = useState(40);
  const [price, setPrice] = useState(0)
  console.log(price)
  const [selectedItems, setSelectedItems] = useState([]);
  const {showId,screenId} = useParams()
  const { isLoading, error, data } = useQuery({    
    queryKey:['order'],queryFn: async() =>{
      const res = await makeRequest.get(`/booking/getBooking/${showId}/${screenId}`);
      const seats = res.data.map(item=>item.Seat_ID);
      setSeatIds(seats)
      setPrice((seats.length*totalCost)+tax)
      // const total = res.data[0].Price*seatIds.length;
      // const taxes = (total*5)/100;
      // setTotalCost((+total))
      // setTax(+taxes)
      return res.data;
    }
  });
  console.log(data)
  // const total = data&&data[0].Price*seatIds.length;
  // const taxes = (total*5)/100;
 
  const snackItems = [
    { id: 1,img:"data:image/jpeg;base64,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", name: 'Nachos+Cola Combo', cost: 55 },
    { id: 2,img:"data:image/jpeg;base64,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", name: 'Popcorn+Cola Combo', cost: 99 },
  ];

  const handleAddRemove = (item) => {
    console.log(selectedItems,item,selectedItems.includes(item.id))
    if (selectedItems.includes(item.id)) {
      // If the item is already selected, remove it
      console.log(selectedItems)
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item.id));
      
      setPrice(price - item.cost);
    } else {
      // If the item is not selected, add it
      setSelectedItems([...selectedItems, item.id]);
      console.log(selectedItems)
      setPrice(price + item.cost);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   try {
     const response = await makeRequest.post(`/payment`,{ 
      movieName:data[0].Name,
      price:price,
      tickets:seatIds.length,
      Screen_ID:screenId,
      Show_ID:showId,
      Seat_IDs:seatIds 
    });
    
   if(response.data){
    window.location = response.data.url
    //  navigate(`${response.data.url}`,{replace:true})
   }     
   } catch (err) {
     console.log(err)
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
                       <h4>Seats-SCREEN {data&&data[0].Screen_ID}</h4>
                        <div className="first">
                          
                            {/* <h3>Fri, 01Dec, 11:00 AM</h3> */}
                            {
                              seatIds&&seatIds.map(id=>(
                                <p key={id}>SEAT {id}</p>
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
                        <p><span>{seatIds&&seatIds.length} {seatIds&&seatIds.length>0?'Tickets':'Ticket'}</span><span>Rs {data&&seatIds.length*totalCost}</span></p>
                        <p><span>Taxes & Fees</span><span>Rs {data&&tax}</span></p>
                      </div>
                    </div>
                    <div className='snacks'>
                      <h3>Add Snacks</h3>
                      <div className="items">
                        {snackItems.map((item) => (
                          <div className='item' key={item.id}>
                            <img src={item.img} alt="item-image" />
                            <div className='item-info'>
                              <div>
                                <h3>{item.name}</h3>
                                <p>Rs {item.cost}</p>
                              </div>
                              <button onClick={() => handleAddRemove(item)}>
                              {selectedItems.includes(item.id) ? 'Remove' : 'Add'}
                            </button>
                            </div>
                          </div>
                        ))}
                      </div>
                  </div>
                    <div className="booking-second">
                       <p><span>Total</span><span>Rs {price}</span></p>
                       <button onClick={handleSubmit}>Proceed to Pay Rs {price}</button>
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