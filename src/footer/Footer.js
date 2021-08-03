import React, { Component } from 'react';
import  './Footer.css';


class Footer extends Component {
    render() { 
        return (
            <div className='div-footer'>
                    <div> Delicious &copy; 2013 All Rights Reserved</div>
                    <div>Proudly published with Ghost.</div>
            </div>
          );
    }
}
 
export default Footer;