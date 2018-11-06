import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Recaptcha from 'react-recaptcha';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            disableLogin: true
        };
    }

    validateForm() {
        return true;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    verifyCallback = response => {
        if (response) {
            this.setState({ disableLogin: false });
        }
    }

    render() {
        const {
            email,
            password,
            disableLogin
        } = this.state;

        return (
            <div className='loginForm'>
                <FormGroup controlId='email' bsSize='large'>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl autoFocus type='text' value={email} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup controlId='password' bsSize='large'>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl value={password} onChange={this.handleChange} type='password' />
                </FormGroup>
                <Recaptcha
                    sitekey="6LftBHkUAAAAAErgctEz56E2R7aQV-5C1XV9pZoD"
                    render="explicit"
                    verifyCallback={(response) => this.verifyCallback(response)}
                />
                <Button className='btnLogin' block bsSize='large' disabled={disableLogin}>
                    Login
                </Button>
            </div>
        );
    }
}

export default Login;
