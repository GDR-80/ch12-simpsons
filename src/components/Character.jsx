import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";
import Like from "./Like";

class Character extends Component {
  render() {
    const { character, quote, image, characterDirection, id, liked } =
      this.props.simpson;

    return (
      <>
        <div className="character">
          <div className="container character_grid">
            <Name name={character} />
            {characterDirection === "Right" ? (
              <>
                <Quote quote={quote} />
                <Image url={image} alt={character} />
              </>
            ) : (
              <>
                <Image url={image} alt={character} />
                <Quote quote={quote} />
              </>
            )}
            <div className="cta_section">
              <Like onLike={this.props.onLike} liked={liked} id={id} />
              <Delete onDelete={this.props.onDelete} id={id} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Character;
