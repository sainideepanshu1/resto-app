import { useState } from "react";

export default function RestaurantSignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    restaurantName: "",
    city: "",
    address: "",
    contactNumber: "",
  });
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h3>SignUp</h3>
      <div>
        <div className="input-wrapper">
          <input
            value={form.email}
            name="email"
            className="input-field"
            onChange={handleInput}
            type="text"
            placeholder="Enter Email Id"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={form.password}
            name="password"
            className="input-field"
            onChange={handleInput}
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={form.confirmPassword}
            name="confirmPassword"
            className="input-field"
            onChange={handleInput}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={form.restaurantName}
            name="restaurantName"
            className="input-field"
            onChange={handleInput}
            type="text"
            placeholder="Enter Restaurant Name"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={form.city}
            name="city"
            className="input-field"
            onChange={handleInput}
            type="text"
            placeholder="Enter City"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={form.address}
            name="address"
            className="input-field"
            onChange={handleInput}
            type="text"
            placeholder="Enter Full Address"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={form.contactNumber}
            name="contactNumber"
            className="input-field"
            onChange={handleInput}
            type="number"
            placeholder="Enter Contact Number"
          />
        </div>
        <div className="input-wrapper">
          <button className="input-field">Login</button>
        </div>
      </div>
    </>
  );
}
