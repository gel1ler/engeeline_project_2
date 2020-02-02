import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Button from './button.js';
export default class Navbar extends Component {
  render() {
    //const handler = this.props.buttonClick;
    return (
      <div className = "Nav">
          <a href=" " className = "logo">
           fghjkfgjjh
          </a>
          <div></div>
          <div className="center"><a href= "" className="center">Услуги</a></div>
          <div className="center"><a href = "" className="center">Контакты</a></div>          
          <div className="center"><a href = "" className="center">Лицензии и сертификаты</a></div>          
      </div>
    );
  }
}
