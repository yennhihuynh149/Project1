import React from 'react';
import './login.scss';
import {Form, Button} from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {

  constructor(){
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
      return <Redirect to = '/home'></Redirect>
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
                  </div>
                  <Button onClick={(e) => this.onClick(e)}>Login</Button>
              </div>
          </React.Fragment>
      )
  }
}

export default LoginPage