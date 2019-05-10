import React, { Component } from "react";
import axios from "axios";

class AddTheatre extends Component {
  constructor(props) {
    super(props);
    this.addTheatre = this.addTheatre.bind(this);
    this.screenCountChangeHandler = this.screenCountChangeHandler.bind(this);
    this.theatreNameChangeHandler = this.theatreNameChangeHandler.bind(this);
    this.state = {
      theatreName: "",
      screenCount: 0
    };
  }
  addTheatre(event) {
    axios.post("http://localhost:4000/addTheatre", {
      theatreName: this.state.theatreName,
      screenCount: this.state.screenCount
    });
  }
  theatreNameChangeHandler(event) {
    this.setState({
      theatreName: event.target.value
    });
  }

  screenCountChangeHandler(event) {
    this.setState({
      screenCount: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Add theatres</h1>

        <label>Theatre Name:</label>
        <input
          type="text"
          name="theatreName"
          required
          value={this.state.theatreName}
          onChange={this.theatreNameChangeHandler}
        />
        <label>No. of screens:</label>
        <input
          type="number"
          name="screenCount"
          required
          value={this.state.screenCount}
          onChange={this.screenCountChangeHandler}
        />
        <input type="submit" value="Add theatre" onClick={this.addTheatre} />
      </div>
    );
  }
}

export default AddTheatre;
