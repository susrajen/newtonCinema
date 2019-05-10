import React, { Component } from "react";
import { hot } from "react-hot-loader";
import AddTheatre from "./components/AddTheatre";

class App extends Component {
  render() {
    return (
      <div>
        <AddTheatre />
      </div>
    );
  }
}

export default hot(module)(App);
