import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();

    this.search = React.createRef();
  }

  componentDidMount() {
    this.search.current.focus();
  }
  render() {
    return (
      <input
        className="search_box"
        ref={this.search}
        type="text"
        placeholder="Search for a Character"
        name="search"
        onInput={this.props.onInput}
      />
    );
  }
}

export default Search;
