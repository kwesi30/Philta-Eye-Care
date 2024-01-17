import '../Styles/branch.css'
import EastLegonOffice from '../Images/EastLegonOffice.png'
import OsuOffice from '../Images/OsuOffice.png'
import DomeOffice from '../Images/DomeOffice.png'
import Testimonial from './Testimonial'




function Ourbranches() {
  return (
    <div className="Branch">
    <div className="header"><h1>Our Branches</h1></div>

    <div className='Location-Container'>
    

    
    <div className='East-Legon'>
    <div><img src={EastLegonOffice} alt='EastLegonOffice'/></div>
    <div><h2>East Legon Office, Accra - Ghana</h2></div>
    <div className='contact'>Opposite Allied Filling Station, top of NIB, Gbewaa Junction, Bawaleshie, East Legon - Accra.<br/>
    +233 (0) 302962012<br/>
    +233 (0) 270155603<br/>
    +233 (0) 544180881</div>
    </div>
    
    <div className='Osu'>
    <div className='Image'><img src={OsuOffice} alt='OsuOffice'/></div>
    <div><h2>Osu Office, Accra - Ghana</h2></div>
    <div className='contact'>Danquah Circle, Adjacent Police Hospital, Cantonments  -Accra<br/>
    +233 (0) 302962012<br/>
    +233 (0) 270155603<br/>
    +233 (0) 544180881</div>
    </div>

    <div className='Dome'>
    <div className='Image'><img src={DomeOffice} alt=''/></div>
    <div><h2>Dome Office, Accra - Ghana</h2></div>
    <div className='contact'>Philta Dome Pillar 2, Opposite Paradise Lodge.<br/>
    +233 (0) 544180881<br/>
    <span>Appointment only</span><br/></div>
    </div>
    
    
    
    </div>
    <Testimonial/>

















    
    </div>
  )
}

export default Ourbranches
