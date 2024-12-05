import React from 'react';

const Profile = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login'; // Redirect to login if no token is found
  }

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      <p>Welcome to your profile page!</p>
      <p>Your token: {token}</p>
    </div>
  );
};

export default Profile;
