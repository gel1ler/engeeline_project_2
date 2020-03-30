import React, { Component } from 'react';
import './style.css'; 
export default class Footer extends Component {
  render() {
     return (
      <div className = "Foot">
        <div className = "f_cont">
          <div className = "f_serv">
            <div className="f_hrefs"><a href= "" className="f_href">О компании</a></div>
            <div className="f_hrefs"><a href = "" className="f_href">Услуги</a></div>          
            <div className="f_hrefs"><a href = "" className="f_href">Контакты</a></div>
          </div>
        </div>
      </div>
    );
  }
}