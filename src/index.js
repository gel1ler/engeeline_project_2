import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './navbar.js';
import './style.css';
import Filter from './filter.js';
import Footer from './footer';
class App extends Component {

  render() {
    return (
      <div>
       <Navbar/>
       <Filter/>
       <Footer/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
