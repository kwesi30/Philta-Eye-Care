import React from 'react'
import '../Styles/shop.css'
import Sl from '../Images/Sl.png'
import Sm from '../Images/Sm.png'
import SR from '../Images/SR.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMotorcycle, faPeopleGroup, faTrophy } from '@fortawesome/free-solid-svg-icons'
import product1 from '../Images/product1.png'
import product2 from '../Images/product2.png'
import product3 from '../Images/product3.png'
import product4 from '../Images/product4.png'
import phone1  from  '../Images/phone1.png'
import phone2  from  '../Images/phone2.png'
import phone3  from  '../Images/phone3.png'
import Testimonial from '../Component/Testimonial'
function Shop() {
  return (
    <div className='Shop-Container'>

    <div className='shop-top'>
    <div className='shoptop-left'><img src={Sl} alt='lens'/></div>

    <div className='shoptop-middle'><img src={Sm} alt='lens'/> <div className='Slogan'>                    
    <div className='txt'><h3>Blend your</h3><br/><h1>Vision</h1><br/><h3>with</h3><br/><h1>Fashion</h1></div>
    <div className='SpecUp'><button><p>SpecUp!</p></button></div>           </div> 
</div>

    <div className='shoptop-right'><img src={SR} alt='lens'/></div>      
    
  </div>
  
  <div className='logos-container'>
  <div className='logo-cont1'>
  <div className='logo1'>
  <div className='icon'><FontAwesomeIcon icon={faTrophy}/></div>
  <div className='lg-text'>
  <div className='High'><h3>High Quality Spectacles & Accessories</h3></div>
  <div className='durable'><p>Made of durable materials</p></div>   </div>   </div>   


  <div className='logo1'>
  <div className='icon'><FontAwesomeIcon icon={faCheckCircle}/></div>
  <div className='lg-text'>
  <div className='High'><h3>Loyalty card</h3></div>
  <div className='durable'><p>Get up to 10% discount on each referral</p></div>   </div>   </div> </div>
   
  <div className='logo-cont2'>
  <div className='logo1'>
  <div className='icon'><FontAwesomeIcon icon={faMotorcycle}/></div>
  <div className='lg-text'>
  <div className='High'><h3>Delivery</h3></div>
  <div className='durable'><p>Upon request</p></div>   </div>   </div>

  <div className='logo1'>
  <div className='icon'><FontAwesomeIcon icon={faPeopleGroup}/></div>
  <div className='lg-text'>
  <div className='High'><h3>Family pack</h3></div>
  <div className='durable'><p>Special discount for families</p></div>   </div>   </div></div>
  
  </div>



  <div className='Products-text' ><h2>Our Products</h2></div>

  <div className='Productimg-cont'>
  <div className='pro-pro2'>
  <div className='product1'>
  <img src={product1}  alt='lens' />
  <div className='lens-nme'><h2>Syltherine</h2></div>
  <div className='stock'><p>In Stock</p></div>
  <div className='prix'><h3>GHC 350</h3></div>
  </div>


  <div className='product2'>
  <img src={product2}  alt='lens' />
  <div className='lens-nme'><h2>Syltherine</h2></div>
  <div className='stock'><p>In Stock</p></div>
  <div className='prix'><h3>GHC 350</h3></div>
  </div>  </div>

  <div className='pro2-pro3'>
  <div className='product3'>
  <img src={product3}  alt='lens' />
  <div className='lens-nme'><h2>Syltherine</h2></div>
  <div className='stock'><p>Out of Stock</p></div>
  <div className='prix'><h3>GHC 350</h3></div>
  </div>

  <div className='product4'>
  <img src={product4}  alt='lens' />
  <div className='lens-nme'><h2>Syltherine</h2></div>
  <div className='stock'><p>Out of Stock</p></div>
  <div className='prix'><h3>GHC 350</h3></div>
  </div>
  
  
  </div> </div>



  <div className='Productimg-cont2'>
  <div className='pro-pro2'>
  <div className='product1'>
  <img src={product1}  alt='lens' />
  <div className='lens-nme'><h2>Syltherine</h2></div>
  <div className='stock'><p>In Stock</p></div>
  <div className='prix'><h3>GHC 350</h3></div>
  </div>


  <div className='product2'>
  <img src={product2}  alt='lens' />
  <div className='lens-nme'><h2>Syltherine</h2></div>
  <div className='stock'><p>In Stock</p></div>
  <div className='prix'><h3>GHC 350</h3></div>
  </div>  </div>

  <div className='pro2-pro3'>
  <div className='product3'>
  <img src={product3}  alt='lens' />
  <div className='lens-nme'><h2>Syltherine</h2></div>
  <div className='stock'><p>Out of  Stock</p></div>
  <div className='prix'><h3>GHC 350</h3></div>
  </div>

  <div className='product4'>
  <img src={product4}  alt='lens' />
  <div className='lens-nme'><h2>Syltherine</h2></div>
  <div className='stock'><p>Out of Stock</p></div>
  <div className='prix'><h3>GHC 350</h3></div>
  </div> </div>
  
  
  </div>

  <div className='product-btn'><button>Show More</button></div>

    

   <Testimonial/>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>























































  )
}

export default Shop





 


