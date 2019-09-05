import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/login';
import Profile from './pages/profile/profile';
import DashBoard from './pages/dashboard/db';

function Nhi() {
  return (
    <div className="Nhi">
      <LoginPage></LoginPage>
      <Profile></Profile>
      <DashBoard></DashBoard>
    </div>
  );
}

export default Nhi;
