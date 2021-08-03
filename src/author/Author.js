import React, { Component } from 'react';
import van from '../assets/van-pic.png';
import logo from '../assets/logo.png';
import './Author.css';

class Author extends Component {
    
    render() { 
        return ( 
            <section className ={'author-section'}>
                <hr className={'line'}></hr>
                 <div className='author-img'>
                    <img src={van} alt="van"/>
                </div>
                <div>
                    <h4>Vanessa Steveson</h4>
                    <span>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</span>
                </div>
                <div>
                    <button className={"share-btn"}>SHARE RECIPE</button>
                </div>
                <div className='author-log'>
                    <img src={logo} alt="lo"/>
                 </div>
            </section>

         );
    }
}
 
export default Author ;