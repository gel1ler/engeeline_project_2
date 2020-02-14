import React, { Component } from 'react';
import './style.css'; 
import logo from "./assets/img/engeline_logo.png";
export default class Navbar extends Component {
  render() {
    //const handler = this.props.buttonClick;
    return (
      <div className = "Nav">
          <a href=" " className = "logo">
          <img src = {logo} className = "img_1"></img>
          </a>
          <div></div>
          <div className="center"><a href= "" className="center">Услуги</a></div>
          <div className="center"><a href = "" className="center">Контакты</a></div>          
          <div className="center"><a href = "" className="center">Лицензии и сертификаты</a></div>          
      </div>
    );
  }
}
