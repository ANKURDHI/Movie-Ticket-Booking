import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container">
         <div className="column">
          <h3>Browse All</h3>
           <nav>
            <ul>
              <li><a href="#">Now Showing</a></li>
              <li><a href="#">Coming Soon</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Cinemas</a></li>
          </ul>
           </nav>
         </div>
         <div className="column">
          <h3>Links</h3>
           <nav>
            <ul>
              <li><a href="#">Register</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Order</a></li>
              <li><a href="#">Help</a></li>
          </ul>
           </nav>
         </div>
         <div className="column">
          <h3>Cinemas</h3>
           <nav>
            <ul className='column-grid'>
            <div>
              <li><a href="#">PVR Cinemas</a></li>
              <li><a href="#">INOX Leisure</a></li>
              <li><a href="#">Carnival Cinemas</a></li>
              <li><a href="#">Cinepolis</a></li>
              <li><a href="#">SPI Cinemas</a></li>
            </div>
            <div>
              <li><a href="#">Prasad's IMAX</a></li>
              <li><a href="#">Sathyam Cinemas</a></li>
              <li><a href="#">Cinépolis India</a></li>
              <li><a href="#">Fame Cinemas</a></li>
              <li><a href="#">Mukta A2 Cinemas</a></li>
            </div>
          </ul>
           </nav>
         </div>
         <div className="column">
          <h3>Enquiry</h3>
           <nav>
            <ul>
              <li><a href="#">Support Service(24x7)</a></li>
          </ul>
           </nav>
         </div>
      </div>
    </footer>
  )
}

export default Footer