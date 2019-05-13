import React, { Component } from "react";
import { hot } from "react-hot-loader";
import AddTheatre from "./components/AddTheatre";
import ListTheatre from "./components/ListTheatre";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={AddTheatre} />
            <Route path="/listTheatres" component={ListTheatre} />
          </Switch>

          {/* <ul>
            <li>
              <Link to={"/"}>Add</Link>
            </li>
            <li>
              <Link to={"/listTheatres"}>View</Link>
            </li>
          </ul> */}
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
