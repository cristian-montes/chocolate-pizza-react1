import React, { Component } from 'react';
import './Imagen.css'
import print from '../assets/print-icon.png';
import chocoPizza from '../assets/choco-pizza.png';

class Imagen extends Component {
    render() { 
        return (  
            <div>
                <hr className={'line'}></hr>

                <div className={'pic-tittle'}>
                    <div> 
                        <h1>Chocolate Pizza</h1>
                        <h3>posted on 15 DEC 2013 / DESSERTS</h3>
                    </div>
                    <div>
                        <img src={print} alt='print'></img>
                    </div>
                </div>
               
                <div>
                    <img src={chocoPizza} alt='chocoPizza'></img>
                </div>

            </div>
        );
    }
}
 
export default Imagen;