import React from 'react'
import './order.scss'

const Order = () => {
  return (
    <div className="order">
        <div className="container">
            <div className="timer">
                <span>Session expires in 3:00</span>
            </div>
            <div className="details">
                <div className="first">
                    <div className="image">
                      <img src="https://assetscdn1.paytm.com/images/cinema/Tiger-3--705x750-d0e91180-6f31-11ee-b230-2d48320d83d4-db9ff0f0-7a3d-11ee-8147-ef6e4eb6a4d7.jpg?format=webp&imwidth=300" alt="movie-image" />
                    </div>
                    <div className="info">
                       <div className="main">
                           <h3>Tiger 3</h3>
                           <div className="tags">
                             <span>U/A</span>
                             <span>Hindi</span>
                             <span>2D</span>
                           </div>
                       </div>
                       <div className="theatre">
                        <h4>PVR Cinemas</h4>
                        <p>
                            DLF Mall of India, Sector 18, Noida, Uttar Pradesh 201301, India
                         </p>
                       </div>
                       <div className="timing">
                        <div className="first">
                            <h3>Fri, 01Dec, 11:00 AM</h3>
                            <p>SCREEN 5,SOFA E-7</p>
                        </div>
                        <div className="second">
                            <span>1</span>
                            <span>TICKET</span>
                        </div>
                       </div>
                    </div>
                </div>

                <div className="booking">
                    <div className="booking-first">
                      <h3>Booking Summary</h3>
                      <div>
                        <p><span>1 Ticket</span><span>Rs 400</span></p>
                        <p><span>Taxes & Fees</span><span>Rs 57.82</span></p>
                      </div>
                    </div>
                    <div className="booking-second">
                       <p><span>Total</span><span>Rs 457.82</span></p>
                       <button>Proceed to Pay Rs 457.82</button>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Order