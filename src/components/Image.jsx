import React, { Component } from "react";

class Image extends Component {
  render() {
    const { url, alt } = this.props;
    return <img src={url} alt={alt} />;
  }
}

export default Image;
