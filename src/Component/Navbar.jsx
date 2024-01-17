import{ Link }from 'react-router-dom'
import logo from '../Images/logo.png'
import '../Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


function Navbar() {
  const[menuOpen,SetMenuOpen] = useState(false)
  return (
    <div className='Navigation'>

    <div className='logo'><img src={logo} alt='Philta Eye care'/></div>
    <input type='text'  className='search' placeholder='search'  /><FontAwesomeIcon icon={faMagnifyingGlass} className='Font-icon'/>
      
     <div className='menu' onClick={()=>{SetMenuOpen(!menuOpen)}}>
     <span></span>
     <span></span>
     <span></span>
     </div>
     

      <ul className= {menuOpen ? "open" : ""}>
      <Link to='/' className='Home'>  <li>Home</li></Link>
      <Link to='/Our branches' className='branches' ><li>Our Branches</li></Link>
      <Link to='/book appointment' className='appointment'><li>Book appointment</li></Link>
      <Link to='/about us' className='about'><li>About Us</li></Link>
      <Link to='/blog' className='blog'><li>Blog</li></Link>
      <Link to='/Shop' className='shop'><li>Shop</li></Link>
      <Link to='/my account' className='account' ><li>My account</li></Link>
      <div className='Login'><Link to='/Sign up' className='signup'><li>Sign up/Login</li></Link></div>
      </ul>

      

      </div>
  )
}

export default Navbar
