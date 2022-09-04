import React, { Component } from "react";

class Like extends Component {
  render() {
    return (
      <div
        className="like_holder"
        onClick={() => this.props.onLike(this.props.id)}
      >
        {this.props.liked ? (
          <i className="bi bi-heart-fill liked"></i>
        ) : (
          <i className="bi bi-bi bi-heart-fill"></i>
        )}
      </div>
    );
  }
}

export default Like;
