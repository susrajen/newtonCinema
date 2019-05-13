import React, { Component } from "react";
import axios from "axios";

class ListTheatre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theatreList: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:4000/listTheatres").then(response => {
      console.log(response);
      console.log(response.data);
      this.setState({ theatreList: response.data });
    });
  }
  render() {
    return (
      <div>
        <h1>List and Select Theatres</h1>
        {this.state.theatreList.map(theatre => (
          <div key={theatre.id}>
            <div key={theatre.id}>{theatre.theatreName}</div>

            <div key={theatre.id}>{theatre.screenCount}</div>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default ListTheatre;
