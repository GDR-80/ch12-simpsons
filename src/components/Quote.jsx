import React, { Component } from "react";

class Quote extends Component {
  render() {
    return <h3>&ldquo; {this.props.quotation} &rdquo;</h3>;
  }
}

export default Quote;
