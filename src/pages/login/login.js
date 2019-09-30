import React from 'react';
import './login.scss';
import { Form, Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import { locale } from '../../config/locale';

class LoginPage extends React.Component {

  constructor() {
    super()
    this.state = {
      logined: false
    }
  }

  onClick = (event) => {
    console.log(event)
    console.log(event.currentTarget)
    let cookie = new Cookies()
    cookie.set('isLogin', 'true')
    this.setState({
      logined: cookie.get('isLogin') === 'true'
    })
  }

  renderDirectTo() {
    if (this.state.logined) {
      return <Redirect to='/home'></Redirect>
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.renderDirectTo()}
        <div className="main">
          <div className="login">
            <div className="circle">
            </div>
            <div className="form">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label></Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me?" />
                </Form.Group>
                <Button variant="danger" type="submit">
                  {locale.login}
                </Button>
              </Form>
              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  Don't have an account? <a href="#" className="ml-2">Sign Up</a>
                </div>
                <div className="d-flex justify-content-center links">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>      
      </React.Fragment>
    )
  }
}

export default LoginPage