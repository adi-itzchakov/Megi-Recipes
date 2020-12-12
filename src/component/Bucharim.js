import React, { Component } from 'react';
import './Bucharim.css';
import background2 from '../pictures/background2.jpg';
import './pictures.css';

class Bucharim extends Component{
    render(){
        return(
            <div>
                <img className="background2" src={background2} alt="background2"/>
                <div className="headTitle">מאכלים בוכריים</div>
            </div>
        )
    }
}

export default Bucharim;