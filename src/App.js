import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/login';
import Profile from './pages/profile/profile';
import DashBoard from './pages/dashboard/dashboard';
import MainRouter from './config/route';
import MenuBar from './components/main-menu/main-menu';
import HeaderElement from './components/header/header';
import HomePage from './pages/home/home';
import FooterElement from './components/footer/footer';

function Nhi() {
  return (
    <React.Fragment>
      <div className="Nhi">
        <HeaderElement></HeaderElement>
        <MainRouter></MainRouter>
        <FooterElement></FooterElement>
      </div>
    </React.Fragment>
  );
}

export default Nhi;
