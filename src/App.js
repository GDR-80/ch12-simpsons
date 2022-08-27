import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import logo from "./simpsons.svg";
import Character from "./components/Character";
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
      return (
        <>
          <img className="logo" src={logo} alt="logo"></img>
          {this.state.apiData.map((character, index) => {
            return <Character key={index} simpson={character} />;
          })}
        </>
      );
    }
    return <h1>Loading.....</h1>;
  }
}
export default App;
