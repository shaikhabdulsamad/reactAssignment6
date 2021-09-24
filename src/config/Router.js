import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../containers/Home';
import Signin from '../containers/Sign_in';
import Signup from '../containers/Sign_up';
import Profile from '../containers/Profile'

function AppRouter(){
    return(
        <Router>
          
        <Route exact path="/" component={Home} /> 
        <Route path="/signin" component={Signin} /> 
        <Route path="/signup" component={Signup} /> 
        <Route path="/profile" component={Profile} /> 
    
        </Router>
    )
}

export default AppRouter;