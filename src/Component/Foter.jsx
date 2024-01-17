import React from 'react';
import '../Styles/Foter.css'
import logo from '../Images/logo.png'
import fcebook2 from '../Images/fcebook2.png'
import instgrm from '../Images/instgrm.png'
import linkedin from '../Images/linkedin.png'
import youtube from '../Images/youtube.png'


const Foter = () => {
  return (
    <footer>
      <div className="footer-content">
      <div className='Layout'>


      
      <div className='foter-logo'>
      <img src={logo} />
      <div className='socil-icons'>
      <img src={fcebook2} />
      <img src={instgrm} />
      <img src={linkedin} />
      <img src={youtube} />
      
      </div>
      
      </div>

      <div className='Our-Services'>
      <h1>Our Services</h1>
      <p>Find Doctors</p>
      <p>Schedule Appointment</p>
      <p>SpecUp, virtual eye glasses</p>
      <p>Buy Eyeglasses and accessories</p>   </div>

      <div className='Vision-care'>
      <h1>Vision care</h1>
      <p>Pediatric eye care</p>
      <p>Eye scan</p>
      <p>Contact lens</p>
      <p>Routine eye examinations</p> </div>

      <div className='Contact'>
      <h1>Contact</h1>
      <p>+233 (0) 302962012</p>
      <p>+233 (0) 544180881</p>
      <p>philtaeyecare@gmail.com</p>
      <h1>Subscribe to our <br/>Blog posts </h1>
      <input type='email' placeholder=' Email'/>
      <button className='Subscribe-btn' >Subscribe</button>
      
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>
        












      </div>
    </footer>
  );
};

export default Foter;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
     
