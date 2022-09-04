import React, { Component } from "react";
import Search from "./Search";
import LikeCount from "./LikeCount";

class Actions extends Component {
  render() {
    const { onInput, total } = this.props;
    return (
      <div className="actions">
        <div className="container action_holder">
          <Search onInput={onInput} />
          <LikeCount total={total} />
        </div>
      </div>
    );
  }
}

export default Actions;
