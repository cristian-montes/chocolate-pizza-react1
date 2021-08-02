import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Imagen from './imageSection/Imagen';

class App extends Component {

  render() { 
    return (
    <div>
    <Header/> 
    <Imagen/>
    <Footer/>
    </div>);
  }
}
 
export default App ;