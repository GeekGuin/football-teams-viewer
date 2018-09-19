import React, { Component } from 'react';

import css from "./css/PlayerTooltip.css";

export default class PlayerTooltip extends Component {
  state = { isOpen: false };
  render() {
    return (
      <div className={css.container} onMouseEnter={this.openTooltip} onMouseLeave={this.closeTooltip} style={this.props.position}>
        <span>{this.props.number}</span>
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