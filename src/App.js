import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  state = {};
  async componentDidMount() {
    const apiData = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
    );
    this.setState({ apiData: apiData.data });
  }
  render() {
    if (this.state.apiData) {
      return <h1>API Data is loaded, now do the homework!</h1>;
    }
    return <h1>Loading.....</h1>;
  }
}
export default App;
