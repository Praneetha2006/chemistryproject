import React, { useState } from 'react';
import './home.css'
import homevid from '../../images/homevid.mp4'

import che1 from '../../images/che1.jpg'
import Navbar from '../navbar/navbar';

const Home = () => {
 
  return (
    <div>
      <Navbar/>


      {/* Video Section */}
      <div className="vid_container">
        <video autoplay loop playsInline>
        <source src={homevid} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>

      {/* About Us Section */}
      <h2 style={{ textAlign: 'center' }}><u>About Us:</u></h2>
      <div className="abt1">
        <div className='abt2'>
          <p>
            Department of Engineering Chemistry was established at the very inception of the college in 1980. 
            The objectives of the department are to train and orient the engineering entrants towards 
            experimentation and required scientific skills. The well-qualified faculty of the department 
            carry forward various functions/activities that are interwoven with multidisciplinary aspects 
            that bring science to the society.
          </p>
        </div>
        <div>
          <img src={che1} alt="Department of Chemistry" />
        </div>
      </div>

      {/* Student Corner Section */}
      <div className="ok">
        <h2 style={{ textAlign: 'center' }}>Student Corner:</h2>
        <div className='std'>
          <div className="tooltip1">        
              Student Presentations
            {/* <div style={{ fontSize: 'small' }} className="tooltiptext">Click to see Student presentations</div> */}
          </div>
          <div className="tooltip2">
              Events
            {/* <div style={{ fontSize: 'small' }} className="tooltiptext">Click to see Events</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home