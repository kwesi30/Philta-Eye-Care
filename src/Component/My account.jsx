import '../Styles/Myaccount.css'
import product1 from '../Images/product1.png'
import Testimonial from './Testimonial'

function Myaccount() {
  return (
    <div className="Myaccount">
    <div className="h2-make-payment"><h2>Make payment</h2></div>

    <div className='myaccount-img'><img src={product1}/></div>
    <div className="h3-price"><h3>GHC 350</h3></div>

    <div className='nme'><p>Name.....................................................................................................................................</p></div>
    <div  className='M-number'><p>Momo Number........................................................................................................................ </p></div>
    <div className='Momo-Op'><p>Momo Operator........................................................................................................................</p></div>

    <div className='Momo-btn'><a href="http://localhost:5173/Sucess" target="" rel="noopener noreferrer"><button>Proceed to pay</button></a></div>

    <Testimonial/>


   





































    </div>
  )
}

export default Myaccount
