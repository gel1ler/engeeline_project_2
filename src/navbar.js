import React, { Component } from 'react';
import './style.css'; 
export default class Navbar extends Component {
  render() {
    //const handler = this.props.buttonClick;
    return (
      <div className = "Nav">
          <a href=" " className = "logo">
           <img src = "./assets/img/engeline_logo"/>
          </a>
          <div></div>
          <div className="center"><a href= "" className="center">Услуги</a></div>
          <div className="center"><a href = "" className="center">Контакты</a></div>          
          <div className="center"><a href = "" className="center">Лицензии и сертификаты</a></div>          
      </div>
    );
  }
}
