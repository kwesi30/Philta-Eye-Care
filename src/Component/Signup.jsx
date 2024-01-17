import '../Styles/Signup.css'
import Google from '../Images/Google.png'
import Facebook from '../Images/Facebook.png'
import Testimonial from './Testimonial'

function Signup() {
  return (
    <div className='SignUp'>

    <div className='my-Acc'><h2>My Account</h2></div>

    
    <div className='Lcontainer'>

    <div className='login'><h1>Login</h1></div>

    <div className='Login-container'>
    <div className='Gmail-container'>
    <div className='Gmail'><img src= {Google} alt=''/></div>
    <div className='Glogin'><p>Login With Google</p></div>         </div>

    <div className='Facebook-container'>
    <div className='Facebook'><img src= {Facebook} alt=''/></div>
    <div className='Fb-login'><p>Login With Facebook</p></div>         </div>

    </div>

    <div className='or'><h3>-OR-</h3></div>


    <div className='phone-number'><h3>Phone number</h3></div>
    <div className='password'><h3>Password</h3></div>

    <button className='Lg-btn'>Login</button>


    <div className='Dont-hve'>
    <div className='Dont-have-an-account'><p>Don’t have an account? </p></div>
    <div className='Sign-up'><p>Sign  up</p></div>         </div>

    <div className='Privacy-box'>
    <div className='Privacy'><p>Privacy |</p></div>
    <div className='Terms-Condition'><p>Terms & Conditions</p></div>         </div>




 
 
    </div>
<Testimonial/>
    




    </div>

  )
}

export default Signup
