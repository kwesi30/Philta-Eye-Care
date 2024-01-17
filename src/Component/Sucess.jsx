import React from 'react'
import '../Styles/Sucess.css'
import sucess from '../Images/sucess.png'








function Sucess() {
    
  return (
    <div className='Sucess'>
    <div className='Sucess-img'><img src={sucess}/></div>
    <div className='Sucess-text'><h1>Success</h1></div>
    <div><a href="http://localhost:5173/" target="" rel="noopener noreferrer"><button className='success-button'>Back to Home</button></a> </div>


















    </div>
  )
}

export default Sucess