import React from 'react';
import './login.scss';
import { Form, Button } from 'react-bootstrap';
import { locale } from '../../config/locale';

class LoginPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <div className="login">
                        <div className="circle">
                        </div>
                        <div className="form">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="text" placeholder={locale.user} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="password" placeholder={locale.pass} />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label={locale.rem} />
                                </Form.Group>
                                <Button variant="danger" type="submit">
                                    {locale.login}
                                </Button>
                            </Form>
                            <div className="mt-4">
                                <div className="d-flex justify-content-center links">
                                     Don't have an account? <a href="#" class="ml-2">Sign Up</a>
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