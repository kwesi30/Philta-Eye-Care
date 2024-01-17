import React from 'react'
import '../Styles/Blog.css'
import Blogimg from '../Images/Blogimg.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Blogimg2 from '../Images/Blogimg2.png'
import logo from '../Images/logo.png'
import SocialMedia from '../Images/Social Media.png'
import Testimonial from './Testimonial'



const Blog = () => {
  return (
    <div className='Main'>
    <div className='Header'><h1>BLOG</h1></div>
    
    <div className='Blog'>
   
    <div className='Left-section'>
    
    <div className='Blog-img'><img src= {Blogimg} alt='Ldy '/></div>

    <div className='Author'><p>  Dr. Ophelia Ama Kyeiwaah </p></div>
    <div className='Title'><p>  How to know the best glasses for your eyesight </p></div>
    <div className='content'><p> Your eyes are your windows to the world, and ensuring you have the right glasses for your eyesight is crucial for both vision correction and eye health. With the myriad of options available, choosing the perfect pair of glasses can be overwhelming. However, understanding your prescription, considering frame styles, and knowing your personal preferences can streamline the process. Let's delve into the steps to help you discover the best glasses for your eyesight.

    1. Get a Comprehensive Eye Exam
    Before you embark on your quest for the perfect glasses, schedule a comprehensive eye exam with an optometrist or ophthalmologist. This examination will not only determine your vision prescription but also assess the overall health of your eyes. Your prescription will detail whether you are nearsighted, farsighted, or have astigmatism, providing a baseline for your glasses selection.
    
    2. Understand Your Prescription
    Deciphering your eyeglass prescription might seem like cracking a code, but it’s a vital step in choosing the right lenses. Your prescription will consist of numbers and abbreviations for each eye, indicating the necessary lens power, astigmatism correction, and other specifics. Consulting your eye care professional to explain your prescription and its implications will guide you in selecting appropriate lenses.
    
    3. Consider Lens Options
    There is no one-size-fits-all when it comes to lenses. Various options cater to different needs, such as:
    
    High-index lenses for stronger prescriptions, reducing lens thickness.
    Photochromic lenses that darken in sunlight for indoor and outdoor use.
    Blue light-blocking coatings to reduce eye strain from digital screens.
    Progressive lenses for multifocal correction without visible lines.
    Understanding these options and discussing them with your optometrist based on your lifestyle and visual requirements will help narrow down your choices.
    
   </p></div>

   </div>


   <div className='Right-Section'>
   <div><input  type='text'  className='Blog-search' placeholder='type something...'/><FontAwesomeIcon icon={faMagnifyingGlass} className='font-icon'/></div>
   <div className='P-Post'><p>POPULAR POST</p></div>

   <div className='Popularpost-Box1'>
   <div className='PP-image'><img src={Blogimg} alt='image' /></div>
   <div className='PPt-Box'>
   <div className='PP-Title'><p>BLOG</p></div>      
   <div className='PP-text'><p>How to know the best glasses for your eyesight.</p></div>   </div>

</div>

<div className='Popularpost-Box1'>
   <div className='PP-image'><img src={Blogimg2} alt='image' /></div>
   <div className='PPt-Box'>
   <div className='PP-Title'><p>BLOG</p></div>      
   <div className='PP-text'><p>Why you get your checked regularly and best ways to do it.</p></div>   </div>

</div>

<div className='Popularpost-Box1'>
   <div className='PP-image'><img src={logo} alt='image' /></div>
   <div className='PPt-Box'>
   <div className='PP-Title'><p>BLOG</p></div>      
   <div className='PP-text'><p>Award winning eye care center, Philta Eye Care organizes eye screening exercise for Ashiaman west municipal.</p></div>   </div>

</div>


<div className='Recent-Post'>RECENT POST</div>
<div className='RP-Blog'><h3>BLOG</h3></div>
<div className='RP-text'><p>How to know the best glasses for your eyesight.</p></div>

<div className='RP-Blog'><h3>BLOG</h3></div>
<div className='RP-text'><p>Why you should get  checked regularly and best ways to do it.</p></div>

<div className='RP-Blog'><h3>BLOG</h3></div>
<div className='RP-text'><p>Award winning eye care center, Philta Eye Care organizes eye screening exercise for Ashiaman west municipal.</p></div>

<div className='RP-Blog'><h3>BLOG</h3></div>
<div className='RP-text'><p>How to know the best glasses for your eyesight.</p></div>

<div className='Subscribe'><h3>SUBSCRIBE</h3></div>

<div className='Subscribe-box'>
<input type='email' placeholder='Your email'/>
<div className='Subscription-btn'><buttton>Subscribe</buttton></div>
</div>

<div className='Social-Media'><p>SOCIAL MEDIA</p></div>
<div className='SM-icons'><img src={SocialMedia} alt=''/></div>





  </div>

  </div>

    <Testimonial/>
    </div>
    
  )
}

export default Blog
    