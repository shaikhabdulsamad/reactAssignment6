import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../containers/Home';
import Request from '../containers/Request';
import BranchManager from '../containers/BranchManager';


function AppRouter(){
    return(
        <Router>
          
        <Route exact path="/" component={Home} /> 
        <Route exact path="/Request" component={Request} /> 
        <Route exact path="/BranchManager" component={BranchManager} /> 
        {/* <Route path="/signin" component={Signin} /> 
        <Route path="/signup" component={Signup} /> 
        <Route path="/profile" component={Profile} />  */}
    
        </Router>
    )
}

export default AppRouter;