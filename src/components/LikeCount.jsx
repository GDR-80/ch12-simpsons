import React, { Component } from "react";

class LikeCount extends Component {
  render() {
    return (
      <div className="like_count">
        <i className="bi bi-heart-fill liked"></i>
        <div>{this.props.total}</div>
      </div>
    );
  }
}

export default LikeCount;
