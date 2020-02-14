import React, { Component } from 'react';
import './style.css';
export default class Button extends Component {
  render() {

    return (
      <div className = "button_line">
       <button className = "button_1" onClick={this.props.handler}>Меню</button>
      </div>
    );
  }
}
