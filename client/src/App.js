import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import * as path from "./constants/routes"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"

 


function App() {
  return (<BrowserRouter>

    <div className="App">
       <Switch>
        <Route exact path="/" component={props => <Home />} />
        <Route exact path={path.LOGIN} component={props => <Login />} />
        <Route exact path={path.SIGNUP} component={props => <SignUp />} />
        <Route exact path={path.FORGOTPASSWORD} component={props => <ForgotPassword />} />


      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
