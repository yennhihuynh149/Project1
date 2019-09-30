import React from 'react';
import './menu-bar.scss';
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { locale } from '../../config/locale';
import Cookies from 'universal-cookie';
import { ListenService } from '../../serviecs/auth/listen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


class MenuBar extends React.Component {
  constructor() {
    super()
 
  }
  checkCurrentLangActive = (lang) => {
    let cookie = new Cookies()
     let lang_ = cookie.get('lang') || 'vi'
     if(lang_ === lang) {
       return <FontAwesomeIcon icon={faCheck} className='icon mr-1'/>
     }
   }
  switchLanguage = (lang) => { //truyen bien
    let cookie = new Cookies()
    cookie.set('lang', lang)
    locale.setLanguage(lang) // update locale
    this.setState({}) // update request
    ListenService.switchLang(lang)
  }
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg" className="main-menu">
          <Navbar.Brand href="/">Green Academy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">{locale.home}</Nav.Link>
              <NavDropdown title={locale.training} id="basic-nav-dropdown" className="w-train" >
                <NavDropdown.Item href="#action/3.1">Web Design</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">C Programming</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Java Programming</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Computer Graphic</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="w-blog" href="./blog">{locale.blog}</Nav.Link>
              <Nav.Link className="w-about" href="./about">{locale.about}</Nav.Link>
              <Nav.Link className="w-cont" href="./conct">{locale.contact}</Nav.Link>
              <Nav.Link href="./tuyen-dung" className="w.hire">{locale.hire}</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder={locale.search} className="mr-sm-2" />
              <Button variant="outline-success" className="w-search">Tìm kiếm</Button>
            </Form>
            <NavDropdown title={locale.lang} id="basic-nav-dropdown">
                <NavDropdown.Item onSelect={() => this.switchLanguage('vi')}>{locale.vi}</NavDropdown.Item>
                <NavDropdown.Item onSelect={() => this.switchLanguage('en')}>{locale.en}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">{locale.logout}</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default MenuBar