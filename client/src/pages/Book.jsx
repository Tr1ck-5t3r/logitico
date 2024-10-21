import React, { useState } from 'react';
import './VehicleBooking.css'; // Assuming you have a CSS file for styling

const VehicleBooking = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [estimatedCost, setEstimatedCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can calculate the estimated cost based on inputs
    // For now, we'll set a static value for demonstration purposes
    setEstimatedCost('Estimated Cost: $150');
  };

  return (
    <div className="booking-container">
      <h1>Book a Vehicle for Transporting Goods</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pickup-location">Pickup Location:</label>
          <input
            type="text"
            id="pickup-location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dropoff-location">Drop-off Location:</label>
          <input
            type="text"
            id="dropoff-location"
            value={dropOffLocation}
            onChange={(e) => setDropOffLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicle-type">Type of Vehicle:</label>
          <select
            id="vehicle-type"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          >
            <option value="">Select a vehicle</option>
            <option value="van">Van</option>
            <option value="truck">Truck</option>
            <option value="bike">Bike</option>
            <option value="small_car">Small Car</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Get Estimate</button>
      </form>
      {estimatedCost && <div className="cost-estimate">{estimatedCost}</div>}
    </div>
  );
};

export default VehicleBooking;

