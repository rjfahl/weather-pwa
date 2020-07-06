import React from 'react';
import './app.css';
import Home from "./pages/home";
import About from "./pages/about";
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