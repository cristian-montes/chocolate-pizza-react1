import React, { Component } from 'react';
import './Header.css';

import logo from '../assets/logo.png';
import fb from '../assets/fb-icon.png';
import twitter from '../assets/twit-icon.png';
import gp from '../assets/gp-icon.png';
import insta from '../assets/insta-icon.png';
import flic from '../assets/flic-icon.png';
import pint from '../assets/pint-icon.png';
import mail from '../assets/mail-icon.png';




class Header extends Component {
    render() { 
        return (  
            <div>
                <header>
                <div className={'delicious'}>

                    <div className={'fork-and-knife'}>
                        <img clasName={'forkImg'} src={logo} alt='Lo'></img>
                    </div>

                    <div>
                        <h2> Delicious</h2>
                        <h3>THE BEST FOOD ON THE WEB</h3>
                    </div>

                </div>
                <div className={'social'}>
                     <img src={fb} alt='social-fb'></img>
                     <img src={twitter} alt='social-twit'></img>
                     <img src={gp} alt='social-gp'></img>
                     <img src={insta} alt='social-insta'></img>
                     <img src={flic} alt='social-flic'></img>
                     <img src={pint} alt='social-pint'></img>
                     <img src={mail} alt='social-mail'></img>
                </div>
                </header>

            </div>
        )
    }
}
 
export default Header;