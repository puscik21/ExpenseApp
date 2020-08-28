import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from './App';
import { About } from './About'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { Layout } from "../styles/components/Layout";
import { NavigationBar } from "../styles/components/NavigationBar";
import { Jumbotron } from "../styles/components/Jumbotron";
import Slides  from "../styles/components/Slides.js"
import Footer from "./Footer";

function Main() {
    return(
        <React.StrictMode>
            <React.Fragment>
                <NavigationBar />
                <Jumbotron />
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/main" component={App} />
                            <Route exact path="/main/about" component={About} />
                            <Route path="/main/contact" component={Contact} />
                            <Route path="/main/slides" component={Slides} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </Layout>
                <Footer />
            </React.Fragment>
        </React.StrictMode>
    );
}
export default Main