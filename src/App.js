import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginForm from './containers/LoginFormContainer';
import PageNotFoundComponent from '../src/Screen/PageNotFound'
import Signup from '../src/Screen/signup'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
                <Route exact path="/" component={LoginForm}/>
                <Route exact path="/signup" component={Signup}/>
                <Route component={PageNotFoundComponent}/>
            </Switch>
        </Router>
      </div>
    )
  }
}

