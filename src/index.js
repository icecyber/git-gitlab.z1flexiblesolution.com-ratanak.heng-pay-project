import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import store from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";
const createHistory = require("history").createBrowserHistory


const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);