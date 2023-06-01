import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function Bookingform() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [numOfRooms, setNumOfRooms] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
  e.preventDefault();
    if (checkIn && checkOut && adults && numOfRooms) {
      navigate('/booknow');
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
          <select
            type="number"
            required
            id="adults"
            name="adults"
            placeholder="Adult"
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value))}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option></select>
        </div>
          <div className="col-md-2">
          <label>children</label>
          <select
          id="children"
          required
          name="children"
          placeholder="Children"
          value={children}
          onChange={(e) => setChildren(parseInt(e.target.value))}
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
          <select
            type="number"
            id="numOfRooms"
            required
            name="numOfRooms"
            placeholder="Rooms"
            value={numOfRooms}
                onChange={(e) => setNumOfRooms(parseInt(e.target.value))}>
                  <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
            </select>
        
        </div>
        <div className="col-md-2">
          <button type="submit" className="book-button">Book Now</button>                   
        </div>      
       
        </div>
        </div>
      </form>
  )
}
