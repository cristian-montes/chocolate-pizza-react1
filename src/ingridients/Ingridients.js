import React, { Component } from 'react';
import './Ingridients.css';

class Ingridients extends Component {
   
    render() { 
        return (  
            <section className="ingredients">
                <div className="left">
                    <ul>
                        <li>1 1/2 cups milk,</li>
                        <li>1/2 cup mascarpone,</li>
                        <li>1/2 tsp pink salt,</li>
                        <li>1lb Black Mission Figs</li>
                        <li>1/2 cup brown sugar</li>
                        <li>2-4 tbsp water</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                    <   li>1 1/2 cups heavy cream</li>
                        <li > <strike>1/3 granulated sugar</strike> </li>
                        <li> <strike>2 egg yolks</strike></li>
                        <li>1 lemon, juiced</li>
                        <li>2 tbsp butter</li>
                        <li>1 cup honey roasted pecans, roughly chopped</li>
                    </ul>
                </div>
          
        </section>
        );
    }
}
 
export default Ingridients;