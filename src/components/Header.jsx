import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <header>
        {" "}
        <img className="logo" src={this.props.logo} alt="logo" />
      </header>
    );
  }
}

export default Header;
