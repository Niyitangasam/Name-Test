import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login, Home, NavBar } from './';

export class App extends Component {
    render() { 
        return ( 
            <Router>
                <div>
                    <NavBar/>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/login" component={ Login }/>
                </div>
            </Router>
         );
    }
}
 