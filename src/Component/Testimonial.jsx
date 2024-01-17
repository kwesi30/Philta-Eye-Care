import '../Styles/Testimonial.css'
import test1 from '../Images/test 1.png'
import test2 from '../Images/test 2.png'
import test3 from '../Images/test 3.png'

function Testimonial() {
  return (
    <div>
    
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
      <div className='Test1-h2'><h2>Jerome Boateng</h2></div>   </div>

      </div>
     
     
     </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Testimonial