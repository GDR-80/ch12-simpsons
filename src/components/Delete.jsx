import React, { Component } from "react";

class Delete extends Component {
  state = {};
  render() {
    return (
      <div
        className="delete"
        onClick={() => this.props.onDelete(this.props.id)}
      >
        <i className="bi bi-trash3-fill"></i>
      </div>
    );
  }
}

export default Delete;
