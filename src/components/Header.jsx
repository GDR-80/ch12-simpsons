import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <div>
        {" "}
        <img className="logo" src={this.props.logo} alt="logo" />
      </div>
    );
  }
}

export default Header;
