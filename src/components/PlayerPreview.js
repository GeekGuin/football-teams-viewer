import React, { Component } from 'react';
import css from './css/PlayerPreview.css';
import playersImg from '../util/playerImages';

export default class PlayerPreview extends Component {
  render() {
    return(
      <div>
        <div className={this.props.isOpen ? css.activeArrow : css.defaultArrow} />
        <section className={this.props.isOpen ? css.activeContent : css.defaultContent}>
          <img className={css.playerImg} src={playersImg[this.props.img]} alt="playerImg"/>
          {this.props.name}
        </section>
      </div>
    )
  }
}