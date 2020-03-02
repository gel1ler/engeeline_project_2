import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './navbar';
import './style.css';
import Filter from './filter.js';
import Footer from './footer';
class App extends Component {
  /*state = {
    showSideMenu:false,
  }

    onButtonClick = () => {
    this.setState({showSideMenu: !this.state.showSideMenu})
  }*/
  render() {
    return (
      <div>
       <Navbar /*buttonClick={this.onButtonClick}*//>
       <Filter/>
       <Footer/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
