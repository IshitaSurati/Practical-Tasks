import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log formData to ensure correct data is being sent
      console.log(formData);

      // Send POST request to login API with correct content-type header
      const response = await axios.post('http://localhost:5000/api/users/login', formData, {
        headers: {
          'Content-Type': 'application/json', // Ensure the correct header
        },
      });

      // Store JWT token in localStorage and navigate to profile page
      localStorage.setItem('token', response.data.token);
      navigate('/profile');
    } catch (error) {
      // Handle errors based on response
      if (error.response) {
        // Server responded with error
        setError(error.response.data.message || 'Invalid credentials, please try again.');
      } else {
        // No response from server
        setError('Network error, please try again later.');
      }
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
