import React from 'react';
import './App.css';
import Home from "./Home";
import About from "./About";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const App = () => {
    return (
        <div className="main-container">
            <Router>
                <header>
                    <Link className="header-link" to="/">Weather</Link>
                    <Link className="header-link" to="/about">About</Link>
                </header>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
            
        </div>
    );
}

export default App;