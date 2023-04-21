import React, { useState } from 'react';
import axios from 'axios';

const RentForm = () => {
  const [name, setName] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        '/api/rentals',
        { name, vehicleType, pickupDate, returnDate },
        config
      );
      setMessage(data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Rent Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="vehicleType">Vehicle Type</label>
          <input
            type="text"
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pickupDate">Pickup Date</label>
          <input
            type="date"
            id="pickupDate"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="returnDate">Return Date</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RentForm;