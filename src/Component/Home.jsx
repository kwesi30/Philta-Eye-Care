import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Styles/Home.css'
import {  faEye, faGlasses, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faClockFour } from '@fortawesome/free-regular-svg-icons'
import itembox from '../Images/itembox.png'
import Doctor from '../Images/Doctor.png'
import test1 from '../Images/test 1.png'
import test2 from '../Images/test 2.png'
import test3 from '../Images/test 3.png'






function Home() {
  return (
    <div className="Home">

    <div className="Cont1">

    <div className='Cont1-Text'>
    <div className='black-text'><h2>Not every closed eye is sleeping <br/> Not every open eye is seeing</h2></div>
    <div className='blue-text'><h2>Trust Us with your eyes!</h2></div>
    <div className='P-text'><p>At<strong>  Philta Eye Care</strong> We are dedicated to helping  you see clearly for  life.</p></div>
 

    <div className='btn'><a href="http://localhost:5173/book%20appointment" target="" rel="noopener noreferrer"><button className='btn1'>Book an Appointment</button></a>
    <a href="http://localhost:5173/Our%20branches" target="" rel="noopener noreferrer">
    <button className='btn2'>See branches near you </button></a>  </div>

    </div>
    
    
    
  
    </div>

         

    <div className='Services'>
    <div className='text'><h2>Our Services</h2></div>

    <div className='iconboxcont'>
    <div className='iconbox'>
    <div className='Icon'><FontAwesomeIcon icon={faUserDoctor}/></div>
    <div className='h3'><h3>Eye Diagnostics</h3></div>
    <div className='p'><p>OCT, Visual field test, eye pressure</p></div>
    </div>

    <div className='iconbox'>
    <div className='Icon'><FontAwesomeIcon icon={faClockFour}/></div>
    <div className='h3'><h3>Schedule Appointment</h3></div>
    <div className='p'><p>Book a comprehensive eye examination</p></div>
    </div>

    <div className='iconbox'>
    <div className='Icon'><FontAwesomeIcon icon={faEye}/></div>
    <div className='h3'><h3>SpecUp</h3></div>
    <div className='p'><p>Try-on our virtual eye glasses</p></div>
    </div>

    <div className='iconbox'>
    <div className='Icon'><FontAwesomeIcon icon={faGlasses}/></div>
    <div className='h3'><h3> Buy Eyeglasses</h3></div>
    <div className='p'><p>ww</p></div>
    </div>



     </div>

    </div>
    

    <div className='Cont2'>
    <h1>SpecUp-Try on our Virtual glasses-Coming soon!</h1>
    <div className='item'><img src={itembox} alt='itembox'/></div>
    
    </div>
    

    <div className='Cont3'>
    <div className='About'>
    <div><h1>About</h1></div>
    </div>

    <div className='Project-br'>
    <div ><span><h1>10K+<br/></h1></span><h3>Patient Recover</h3><br/><p> with our doctor</p></div>
    <div ><span><h1>1K+<br/></h1></span> <h3>Outreach</h3><br/> <p> Education and screening</p></div>
    <div ><span><h1>3<br/></h1></span><h3>Eye care centres</h3> <br/><p> East Legon, Osu, Dome</p></div>
    <div ><span><h1>7K+<br/></h1></span><h3>Positive Feedback</h3><br/><p> From out Clients</p></div>
    </div>


    <div className='Description-box'>

    <div className='left-side'><img src={Doctor} alt='Doctor'/></div>
    <div className='Doc-nme'><h2>Dr. Ophelia Ama Kyeiwaah </h2><p>Founder Philta eye care</p><br/><p>OD, MGOA</p></div>
    


    <div className='PhiltaEye-Care'><h1><span>Philta </span>Eye care</h1><br/>
    
   <p> Philta Eyecare is an eye clinic established with the aim of providing comprehensive eye care with exceptional service. Philta Eyecare provides both clinical care and on-site screenings.</p><br/>

    <p>Philta Eyecare has been very active not just in the provision of clinical care but also in the provision of on-site eye care for several institutions, a few of which are mentioned below.</p><br/>
    <p>Philta Healthcare has been in charge of providing medical cover for the staff of Opportunity International over the past four years. We have also partnered Denk Pharma (Ghana team), a German Pharmaceutical company in the last four years to organize such outreach programs for various organisations especially community Pharmacies.</p>
    </div>
   
    </div> 

     <div className='Customers-box'>
     <div className='text'><h2>Hear From Our Customers</h2></div>

     <div className='Customers-Test'>
      <div className='Test1'><div><img src={test1}/></div>
      <div className='Test1-p'><p>Excellent services. I would use them over and over. Strongly recommended.</p></div> 
      <div className='Test1-h2'><h2>Cherubim Mawuli Amenyedor</h2></div>   </div>

      <div className='Test1'><div><img src={test2}/></div>
      <div className='Test1-p'><p>...their warm welcome and friendly atmosphere quickly made me so comfortable.</p></div> 
      <div className='Test1-h2'><h2>Gloria Bediako</h2></div>  </div>

      <div className='Test1'><div><img src={test3}/></div>
      <div className='Test1-p'><p>Excellent services. I would use them over and over. Strongly recommended.</p></div> 
      <div className='Test1-h2'><h2>Cherubim Mawuli Amenyedor</h2></div>   </div>

      </div>
     
     
     </div>

    







    </div>















    </div>
  )
}

export default Home
