import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

class Character extends Component {
  render() {
    //console.log(this.props.title.characterDirection);
    return (
      <>
        <div className="character">
          <div className="container character_grid">
            <Name name={this.props.simpson.character} />
            {this.props.simpson.characterDirection === "Right" ? (
              <>
                <Quote quotation={this.props.simpson.quote} />
                <Image
                  url={this.props.simpson.image}
                  alt={this.props.simpson.character}
                />
              </>
            ) : (
              <>
                <Image
                  url={this.props.simpson.image}
                  alt={this.props.simpson.character}
                />
                <Quote quotation={this.props.simpson.quote} />
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Character;
