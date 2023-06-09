import React from "react";
import Home from "./Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Service from "./Pages/Service";
import Error from "./Pages/Error";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/services" component={Service} />
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}
