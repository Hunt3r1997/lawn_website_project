import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from '@emailjs/browser';
import './Schedule.css';

function Schedule() {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage on mount
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(savedBookings);
  }, []);

  // Save bookings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  // Initialize EmailJS with Public Key
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  // Check if a time slot is available
  const isTimeAvailable = (time) => {
    const hour = time.getHours();
    const month = time.getMonth(); // 0 = Jan, 11 = Dec
    const isSeason = month >= 2 && month <= 9; // March-Oct
    const isBusinessHours = hour >= 7 && hour < 17; // 7 AM–5 PM

    if (!isSeason || !isBusinessHours) return false;

    return !bookings.some((booking) => {
      const bookedDate = new Date(booking.date);
      if (isNaN(bookedDate.getTime())) return false;
      const timeDiff = Math.abs(time - bookedDate) / (1000 * 60 * 60); // Hours
      return timeDiff < 1; // Block if within 1 hour
    });
  };

  const handleBooking = async () => {
    if (!name) {
      setMessage('Please enter your name!');
      return;
    }
    if (!email) {
      setMessage('Please enter your email!');
      return;
    }
    if (!isTimeAvailable(date)) {
      setMessage('That time is unavailable or outside our hours!');
      return;
    }

    const booking = { name, email, date: date.toISOString() };
    setBookings([...bookings, booking]);

    // Prepare email parameters
    const emailParams = {
      name,
      email,
      date: date.toLocaleString(),
      to_email: email, // For customer email
    };

    try {
      // Send Customer Confirmation Email
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_CUSTOMER_TEMPLATE_ID,
        emailParams
      );

      // Send Business Notification Email
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_BUSINESS_TEMPLATE_ID,
        {
          ...emailParams,
          to_email: process.env.REACT_APP_BUSINESS_EMAIL, // ampeduplawncare@gmail.com
        }
      );

      setMessage('Booking successful! Confirmation emails sent.');
    } catch (error) {
      console.error('EmailJS error:', error);
      setMessage('Booking saved, but failed to send emails. Please try again.');
    }

    setName('');
    setEmail('');
    setDate(new Date());
    // Auto-clear message after 5 seconds
    setTimeout(() => setMessage(''), 5000);
  };

  // Export bookings as a JSON file
  const exportBookings = () => {
    const dataStr = JSON.stringify(bookings, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bookings.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
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
            Your Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              timeIntervals={30}
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
              filterDate={(d) => d.getMonth() >= 2 && d.getMonth() <= 9}
              filterTime={isTimeAvailable}
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
        <h2 style={{ color: '#2e7d32', marginTop: '20px' }}>Current Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {bookings.map((booking, index) => (
              <li key={index} style={{ margin: '10px 0' }}>
                {booking.name} ({booking.email}) - {new Date(booking.date).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={exportBookings}
          style={{
            padding: '10px 20px',
            backgroundColor: '#388e3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px',
          }}
        >
          Export Bookings
        </button>
      </div>
    </div>
  );
}

export default Schedule;