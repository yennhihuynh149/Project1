import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/login';
import Profile from './pages/profile/profile';
import DashBoard from './pages/dashboard/dashboard';
import MainRouter from './config/route';
import HeaderElement from './components/header/header';
import HomePage from './pages/home/home';
import FooterElement from './components/footer/footer';
import MenuBar from './components/menu-bar/menu-bar';
import Cookies from 'universal-cookie';
import { locale } from './config/locale';
import { ListenService } from './serviecs/auth/listen';

class Nhi extends React.Component {
  constructor() {
    super()
    let cookie = new Cookies()
    let lang = cookie.get('lang') === undefined ? 'vi' : cookie.get('lang') // if not ->undefine, yes -> lay gtri htai
    locale.setLanguage(lang)
  }

  componentDidMount() {
    let self = this 
    ListenService.onChangeLang().subscribe(
      () => {
        self.setState({}) // reload
      }
    )
    }
  render () {
    return (
      <React.Fragment>
        <div className="Nhi">
          <MenuBar></MenuBar>
          <HeaderElement></HeaderElement>
          <MainRouter></MainRouter>
          <FooterElement></FooterElement>
        </div>
      </React.Fragment>
    )
  }
}

export default Nhi;
