import React, { Component } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal");

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  static getDerivedStateFromProps(props, state) {
    return { visible: props.modalData.open };
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  closeModal = () => {
    console.log("afds");
    // this.setState({ visible: false });
  };

  render() {
    console.log(this.props.modalData);
    console.log(this.state);
    return (
      <div onClick={this.closeModal}>
        {this.state.visible
          ? ReactDOM.createPortal(this.props.children, this.el)
          : null}
      </div>
    );
  }
}
