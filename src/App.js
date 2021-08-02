import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Imagen from './imageSection/Imagen';
import Instructions from './instructions/Instructions';
import Ingridients from './ingridients/Ingridients';
import Author from './author/Author';

class App extends Component {

  render() { 
    return (
    <div>
    <Header/> 
    <Imagen/>
    <Instructions/>
    <Ingridients/>
    <Author/>
    <Footer/>
    </div>);
  }
}
 
export default App ;