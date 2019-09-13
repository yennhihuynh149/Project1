import React from 'react';
import './menu-bar.scss';
import {Navbar, NavDropdown, Nav, Form, Button, FormControl} from 'react-bootstrap';

class MenuBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Green Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Trang chủ</Nav.Link>
                            <NavDropdown title="Khóa đào tạo" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/">Giới thiệu</Nav.Link>
                            <Nav.Link href="/">Liên hệ</Nav.Link>
                            <Nav.Link href="/">Tuyển dụng</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Tìm kiếm" className="mr-sm-2" />
                            <Button variant="outline-success">Tìm kiếm</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default MenuBar