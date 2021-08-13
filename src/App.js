import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./components/Home";
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Logout from './views/auth/Logout';
import Dashboard from './views/app/Dashboard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          <Switch>
            <Route path='/login' component={Login} exact />
            <Route path='/signup' component={Signup} exact />
            <Route path='/logout' component={Logout} exact />
            <Route path='/dashboard' component={Dashboard} exact />
          </Switch>
        </Router>
        <Home />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
