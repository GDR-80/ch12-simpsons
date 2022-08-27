import React, { Component } from "react";

class Image extends Component {
  render() {
    return <img src={this.props.url} alt={this.props.alt} />;
  }
}

export default Image;
