import React, { Component } from "react";

class Quote extends Component {
  render() {
    return <p>&ldquo; {this.props.quotation} &rdquo;</p>;
  }
}

export default Quote;
