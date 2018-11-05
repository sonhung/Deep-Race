import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './style/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="body">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                        </Switch>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div >
        );
    }
}

export default App;
