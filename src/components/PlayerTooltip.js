import React, { Component } from 'react';

import css from "./css/PlayerTooltip.css";

export default class PlayerTooltip extends Component {
  state = { isOpen: false };
  render() {
    return (
      <div className={this.state.isOpen ? css.activeContainer : css.defaultContainer} style={this.props.position}>
        <div className={css.players} onMouseEnter={this.openTooltip} onMouseLeave={this.closeTooltip} >
          <span>{this.props.number}</span>
        </div>
        <div className={this.state.isOpen ? css.activeArrow : css.defaultArrow} />
        <section className={this.state.isOpen ? css.activeContent : css.defaultContent}>
          {this.props.name}
        </section>
      </div>
    );
  }

  openTooltip = () => {
    this.setState({ isOpen: true });
  };

  closeTooltip = () => {
    this.setState({ isOpen: false });
  }
}
