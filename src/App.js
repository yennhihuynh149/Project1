import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/login';
import Profile from './pages/profile/profile';
import DashBoard from './pages/dashboard/dashboard';
import MainRouter from './config/route';
import MenuBar from './components/main-menu/main-menu';

function Nhi() {
  return (
    <div className="Nhi">
      <MenuBar></MenuBar>
      <MainRouter></MainRouter>
    </div>
  );
}

export default Nhi;
