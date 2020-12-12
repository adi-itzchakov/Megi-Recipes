import React, { Component } from 'react';
import saladsImg from '../pictures/saladsbackground.jpg'
import './pictures.css';

class Salads extends Component{
    render(){
        return(
            <div>
                <img className="saladsImg" src={saladsImg} alt="saladsImg"/>
                <div className="headTitle">סלטים</div>
            </div>
        )
    }
}

export default Salads;