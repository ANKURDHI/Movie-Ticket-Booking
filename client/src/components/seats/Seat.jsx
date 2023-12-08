import React,{useState} from 'react'

const Seat = ({seat,setBookedSeats}) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="seat">
      {
        seat.Status==='Booked'?<div className='booked'></div>:
        <div className={`${selected ? 'selected' : ''}`}
        onClick={() => {
          setSelected(!selected);
          console.log(selected)
          !selected?setBookedSeats((prevValue)=> [...prevValue,seat.Seat_ID]):setBookedSeats((prevValue)=> prevValue.splice(prevValue.indexOf(seat.Seat_ID),1))
        }}></div>
      }
    </div>
  );
};

export default Seat