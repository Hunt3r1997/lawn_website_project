// src/components/Schedule.js
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Schedule.css'; 
function Schedule() {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [bookings, setBookings] = useState([]);

  // Fetch existing bookings on component mount
  useEffect(() => {
    fetch('/.netlify/functions/getBookings')
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => setMessage('Error loading bookings: ' + err.message));
  }, []);

  // Check if a time slot is available
  const isTimeAvailable = (time) => {
    const hour = time.getHours();
    const month = time.getMonth(); // 0 = Jan, 11 = Dec
    const isSeason = month >= 2 && month <= 9; // March (2) to Oct (9)
    const isBusinessHours = hour >= 8 && hour < 18; // 8 AM - 6 PM

    if (!isSeason || !isBusinessHours) return false;

    // Check for overlap within 1-hour window
    return !bookings.some((booking) => {
      const bookedDate = new Date(booking.date);
      const timeDiff = Math.abs(time - bookedDate) / (1000 * 60 * 60); // Hours
      return timeDiff < 1; // Block if within 1 hour
    });
  };

  const handleBooking = async () => {
    if (!name) {
      setMessage('Please enter your name!');
      return;
    }
    if (!isTimeAvailable(date)) {
      setMessage('That time is unavailable or outside our hours!');
      return;
    }

    const booking = { name, date: date.toISOString() };
    try {
      const response = await fetch('/.netlify/functions/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });
      if (response.ok) {
        setMessage(`Thanks, ${name}! We’ll mow on ${date.toLocaleString()}.`);
        setBookings([...bookings, booking]); // Update local state
        setName('');
        setDate(new Date());
      } else {
        setMessage('Booking failed—try again.');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3', // Light green background
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#2e7d32', marginBottom: '20px' }}>Schedule a Mow</h1>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#388e3c', marginBottom: '5px' }}>
            Your Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginTop: '5px',
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#388e3c', marginBottom: '5px' }}>
            Pick a Date & Time:
            <DatePicker
              selected={date}
              onChange={(newDate) => setDate(newDate)}
              showTimeSelect
              timeIntervals={30} // 30-minute slots
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()} // No past dates
              filterDate={(d) => d.getMonth() >= 2 && d.getMonth() <= 9} // March-Oct
              filterTime={isTimeAvailable} // Business hours + availability
              className="custom-datepicker"
            />
          </label>
        </div>
        <button
          onClick={handleBooking}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Book Now
        </button>
        {message && (
          <p style={{ marginTop: '15px', color: '#2e7d32' }}>{message}</p>
        )}
      </div>
    </div>
  );
}

export default Schedule;
