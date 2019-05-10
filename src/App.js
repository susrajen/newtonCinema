import React, { Component } from "react";
import { hot } from "react-hot-loader";
import AddTheatre from "./components/AddTheatre";
import ListTheatre from "./components/ListTheatre";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={AddTheatre} />
            <Route path="/listTheatres" component={ListTheatre} />
            <Route />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
