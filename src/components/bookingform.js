import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function Bookingform() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [numOfRooms, setNumOfRooms] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  let incNum =()=>{
    if(adults<10)
    {
    setAdults(Number(adults)+1);
    }
  };
  let decNum = () => {
     if(adults>0)
     {
      setAdults(adults - 1);
     }
  }
  // rooms
    let incRooms =()=>{
    if(numOfRooms<10)
    {
    setNumOfRooms(Number(numOfRooms)+1);
    }
  };
  let decRooms = () => {
     if(numOfRooms>0)
     {
      setNumOfRooms(numOfRooms - 1);
     }
  }
   const handleSubmit = (event) => {
    event.preventDefault();
     if (checkIn !== '' && checkOut !== '' && adults !== '' && numOfRooms !== '') {  
        setIsSubmitting(true);

      // Simulate a delay of 2 seconds
      setTimeout(() => {
        setIsSubmitting(false);
           navigate('/booknow'); // Change '/next-page' to the actual route of your next page
      }, 2000);
    } else {
      console.log('Please fill all fields.');
    }
  };

    return (
      <form className="checkin-form" onSubmit={handleSubmit}>
        <div className="container">
        <div className="row">         
          <div className="col-md-2">
          <label>Check-in</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            required
            pattern= "^[A-Za-z0-9]{3,16}$"
            value={checkIn}
            placeholder="Check-in"
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
          <div className="col-md-2">
          <label>Check-Out</label>
          <input
            type="date"
            required
            id="checkOut"
            placeholder="Check-out"
            name="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="col-md-2">
        <label>Adults</label>
        <div className="input-g">
        <button className="decbutton" onClick={decNum}>-</button>
                <input
                  type="number"
                  value={adults}
                  readOnly
                  required
                  onChange={(e) => setAdults(e.target.value)} />
        <button className="incbutton" onClick={incNum}>+</button>
      </div>
  </div>


          <div className="col-md-2">
          <label>children</label>
          <select
          id="children"
          required
          name="children"
          placeholder="Children"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          {/* Add more options as needed */}
        </select>
        </div>
          <div className="col-md-2">
              <label>Rooms</label>
               <div className="input-g">
        <button className="decbutton" onClick={decRooms}>-</button>
                <input
                  type="number"
                  value={numOfRooms}
                  readOnly
                  required
                  onChange={(e) => setNumOfRooms(e.target.value)} />
        <button className="incbutton" onClick={incRooms}>+</button>
      </div>
        </div>
        <div className="col-md-2">
              <button type="submit" className="book-button" >
                  {isSubmitting ? 'Submitting...' : 'Book Now'}</button>                   
        </div>          
        </div>
        </div>
      </form>
  )
}
