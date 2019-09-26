import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/login';
import DashBoard from './pages/dashboard/dashboard';
import MainRouter from './config/route';
import HeaderElement from './components/header/header';
import HomePage from './pages/home/home';
import FooterElement from './components/footer/footer';
import MenuBar from './components/menu-bar/menu-bar';

function Nhi() {
  return (
    <React.Fragment>
      <div className="Nhi">
        <MenuBar></MenuBar>
        <HeaderElement></HeaderElement>
        <MainRouter></MainRouter>
        <FooterElement></FooterElement>
      </div>
    </React.Fragment>
  );
}

export default Nhi;
