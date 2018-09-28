import React, { Component } from "react";
import css from "./css/PlayerModal.css";

export default class PlayerModal extends Component {
  render() {
    return (
      <div className={css.default} onClick={this.stopClosing}>
        <div>HORY SHET</div>
      </div>
    );
  }

  stopClosing = e => {
    console.log("no close!");
    e.stopPropagation();
  };
}
