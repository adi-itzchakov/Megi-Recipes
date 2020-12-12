import React, { Component } from 'react';
import background1 from '../pictures/background1.jpg';
import './pictures.css';

class Cakes extends Component{
    render(){
        return(
            <div>
                <img className="background1" src={background1} alt="background1"/>
                <div className="headTitle">עוגות</div>
            </div>
        )
    }
}

export default Cakes;