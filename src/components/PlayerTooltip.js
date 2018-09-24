import React, { Component } from "react";
import css from "./css/PlayerTooltip.css";

import PlayerPreview from "./PlayerPreview";
import Modal from "./Modal";
import PlayerModal from "./PlayerModal";

export default class PlayerTooltip extends Component {
  state = { isOpen: false, modalData: { open: false } };
  render() {
    return (
      <div
        className={
          this.state.isOpen ? css.activeContainer : css.defaultContainer
        }
        style={this.props.position}
        onClick={this.openModal}
      >
        <div
          className={css.players}
          onMouseEnter={this.openTooltip}
          onMouseLeave={this.closeTooltip}
        >
          <span>{this.props.number}</span>
        </div>
        <PlayerPreview
          isOpen={this.state.isOpen}
          name={this.props.name}
          img={this.props.img}
        />
        <Modal modalData={this.state.modalData}>
          <PlayerModal />
        </Modal>
      </div>
    );
  }

  openTooltip = () => {
    this.setState({ isOpen: true });
  };

  closeTooltip = () => {
    this.setState({ isOpen: false });
  };

  openModal = () => {
    console.log("openModal Tooltip");
    this.setState({
      modalData: {
        open: true,
        player: this.props.name,
        img: this.props.img
      }
    });
  };
}
