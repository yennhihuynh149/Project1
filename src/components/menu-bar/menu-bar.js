import React from 'react';
import './menu-bar.scss';
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { locale } from '../../config/locale'

class MenuBar extends React.Component {
  constructor() {
    super()
    this.state = {
      lang: 'vi'
    }
    locale.setLanguage(this.state.lang)
  }
  switchLanguage = () => {
    this.setState ({
      lang: this.state.lang == 'vi' ? 'en' : 'vi'
    })
    locale.setLanguage(this.state.lang) // update locale
    this.setState({}) // update request
  }
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Green Academy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">{locale.home}</Nav.Link>
              <NavDropdown title={locale.training} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Web Design</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">C Programming</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Java Programming</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Computer Graphic</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">{locale.blog}</Nav.Link>
              <Nav.Link href="/">{locale.about}</Nav.Link>
              <Nav.Link href="/">{locale.contact}</Nav.Link>
              <Nav.Link href="/">{locale.hire}</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder={locale.search} className="mr-sm-2" />
              <Button variant="outline-success">Tìm kiếm</Button>
            </Form>
            <Button variant="outline-secondary" onClick={() => this.switchLanguage()}>{locale.lang}</Button>
            <Nav.Link href="/">{locale.logout}</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default MenuBar