import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/home/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';

import './style/App.css';

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="body">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div >
        );
    }
}

export default App;
