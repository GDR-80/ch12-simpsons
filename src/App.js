import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Simpsons from "./simspons.json";
import logo from "./simpsons.svg";
import Header from "./components/Header";
import Character from "./components/Character";
import Actions from "./components/Actions";
import { findById, calcTotalLikes } from "./utils";

class App extends Component {
  state = {};
  async componentDidMount() {
    try {
      const apiData = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
      );

      apiData.data.forEach((element, index) => (element.id = index));

      this.setState({ apiData: apiData.data });
    } catch (error) {
      console.log(error);

      Simpsons.forEach((element, index) => (element.id = index));

      this.setState({ apiData: Simpsons });
    }
  }

  onLike = (id) => {
    const index = findById(id, this.state.apiData);

    const apiData = [...this.state.apiData];

    //toggle like even if it starts at undefined
    if (apiData[index].liked === true) {
      apiData[index].liked = false;
    } else {
      apiData[index].liked = true;
    }

    console.log(apiData.liked);

    this.setState({ apiData });
  };

  onDelete = (id) => {
    const index = findById(id, this.state.apiData);
    const apiData = [...this.state.apiData];

    apiData.splice(index, 1);

    this.setState({ apiData: apiData });
  };

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  };

  render() {
    const { apiData, search } = this.state;
    if (apiData === undefined) {
      return (
        <div className="loading">
          <h1>Loading Characters</h1>
          <div className="hourglass"></div>
        </div>
      );
    }

    const total = calcTotalLikes(apiData);

    const filtered = [...apiData].filter((c) =>
      c.character.toLowerCase().includes(search)
    );

    const result = filtered.length > 0 ? filtered : apiData;

    return (
      <>
        <Header logo={logo} />
        <Actions total={total} onInput={this.onInput} />
        {result.map((character) => (
          <Character
            key={character.id}
            simpson={character}
            onDelete={this.onDelete}
            onLike={this.onLike}
          />
        ))}
      </>
    );
  }
}
export default App;
