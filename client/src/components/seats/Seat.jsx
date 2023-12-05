import React,{useState} from 'react'

const Seat = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="seat">
      <div className={`${selected ? 'selected' : ''}`}
      onClick={() => setSelected(!selected)}></div>
    </div>
  );
};

export default Seat