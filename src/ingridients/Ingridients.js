import React, { Component } from 'react';
import './Ingridients.css';
import IngridientItem from './Ingridientitem';
import dataIngridients1 from '../data/Data1';
import dataIngridients2 from '../data/Data2';



class Ingridients extends Component {

   
    render() { 
        return (  
            <section className="ingredients">
                <div className="left">
                    <ul>
                        {dataIngridients1.map(item =>{
                        return <IngridientItem name={item.name} amount={item.amount}/>})       
                        }
                    </ul>
                </div>
                <div className="right">
                    <ul>
                    {dataIngridients2.map(item =>{
                        return <IngridientItem name={item.name} amount={item.amount}/>})       
                        }
                    </ul>
                </div>
          
        </section>
        );
    }
}
 
export default Ingridients;
