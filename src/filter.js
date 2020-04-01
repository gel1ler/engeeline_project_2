import React, { Component } from 'react';
import './style.css';
import Scontainer from './scontainer.js';
export default class Filter extends Component {
  render() {
    //const show  = this.props.show;
    return (
      <div className = "services">
          <div className =  "t-container">
          <Scontainer /*show={show}*//>
          <Scontainer/>
          <Scontainer/>
          </div>
      </div>
    );
  }
}
