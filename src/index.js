import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { About } from './components/About'
import { Contact } from './components/Contact'
import { NoMatch } from './components/NoMatch'
import { Layout } from "./styles/components/Layout";
import { NavigationBar } from "./styles/components/NavigationBar";
import { Jumbotron } from "./styles/components/Jumbotron";
import Slides  from "./styles/components/Slides.js"
import Footer from "./components/Footer";
import Cover from "./styles/components/Cover"
import Main from "./components/Main";

ReactDOM.render(
  <React.StrictMode>
      <React.Fragment>
              <Router>
                  <Switch>
                      <Route exact path="/" component={Cover} />
                      <Route path="/main" component={Main} />
                  </Switch>
              </Router>
      </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
