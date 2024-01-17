import Blog from "./Component/Blog"
import Home from "./Component/Home"
import { Routes ,Route } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Ourbranches from "./Component/Our branches"
import BookAppointment from "./Component/Book Appointment"
import AboutUs from "./Component/About Us"
import Shop from "./Component/Shop"
import Myaccount from "./Component/My account"
import Signup from "./Component/Signup"
import Foter from "./Component/Foter"
import Sucess from "./Component/Sucess"





function App() {
  return (
      <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Our branches" element={<Ourbranches/>}/>
      <Route path="/book appointment" element={<BookAppointment/>}/>
      <Route path="/about us" element={<AboutUs/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/my account" element={<Myaccount/>}/>
      <Route path="/Sign up" element={<Signup/>}/>
      <Route path="/Sucess" element={<Sucess/>}/>
      
      
      </Routes>
      

      <Foter/>
    
      

      
      
      

      
      
     
      </>
      
  )
}

export default App

