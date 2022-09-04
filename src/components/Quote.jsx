import React, { Component } from "react";

class Quote extends Component {
  render() {
    return <p>&ldquo; {this.props.quote} &rdquo;</p>;
  }
}

export default Quote;
