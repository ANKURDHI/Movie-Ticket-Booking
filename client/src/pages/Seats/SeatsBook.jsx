import React from 'react'
import './seatsbook.scss'
import Seats from '../../components/seats/Seats'

const SeatsBook = () => {
  return (
    <div className="seatsbook">
        <div className="container">
            <div className="topbar">
                <div className="container">
                <div className="first">
                    <div className="date">
                        <p>Wed</p>
                        <span>15 Nov</span>
                    </div>
                    <div className="shows">
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
                <div className="second">
                   <div className="item">
                        <div></div>
                        <span>AVAILABLE</span>
                    </div>
                   <div className="item">
                        <div></div>
                        <span>BOOKED</span>
                    </div>
                   <div className="item">
                        <div></div>
                        <span>SELECTED</span>
                    </div>
                </div>
                </div>
            </div>

            <Seats/>
            <div className="prices">
                <div className="content">
                    <div className="first">
                        <div>Rs 700</div>
                        <div>Ticket 1 x Rs700</div>
                    </div>
                    <button>BOOK TICKET</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SeatsBook