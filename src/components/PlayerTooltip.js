import React, { Component } from 'react';

import css from "./css/PlayerTooltip.css";
import PlayerPreview from './PlayerPreview';

export default class PlayerTooltip extends Component {
  state = { isOpen: false };
  render() {
    return (
      <div className={this.state.isOpen ? css.activeContainer : css.defaultContainer} style={this.props.position}>
        <div className={css.players} onMouseEnter={this.openTooltip} onMouseLeave={this.closeTooltip} >
          <span>{this.props.number}</span>
        </div>
        <PlayerPreview isOpen={this.state.isOpen} name={this.props.name} img={this.props.img} />
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
