import '../Styles/BookAppointment.css'
import Select from 'react-dropdown-select'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import  {useState} from 'react'
import moment from 'moment'




function BookAppointment() {

  const options = [
    { 
      value: 1,
      label: "East Legon Office"
    },
    {
      value:  2,
      label: "Osu Office"
    },
    {
      value:  3,
      label: "Dome Office"
    },
  ];





  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }

  

  return (
    <div className="Appointment">
    <div className="header-text"><h2>Book Appointment </h2></div>
    

    <div className='Appointment-Form'>
    <div className="Branch-text"><h2>Select a branch </h2></div>

    <div className='Dropdown'>
    <Select name='select' options={options}></Select></div>

    <div className="Date-text"><h2>Choose a Date </h2></div>
    <div className="Date-box"><Calendar value={dateState} onChange={changeDate}/>

    <p>Your Appointment  date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </div>

    <div className="Time-text"><h2>Pick a time </h2></div>
    <div className="Time-box"><h2> </h2></div>

    <div className='Buttons'>
    <div className='butt1'><a href="http://localhost:5173/" target="" rel="noopener noreferrer"> <button>Back</button></a></div>
    <div className='butt2' ><a href="http://localhost:5173/Sucess" target="" rel="noopener noreferrer"><button>Continue</button></a></div>
    </div>
    
    
    
    
    </div>



















































    </div>
  )
}

export default BookAppointment
