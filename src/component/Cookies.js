import React, { Component } from 'react';
import cookiesImg from '../pictures/cookies.jpg'
import './pictures.css';

class Cookies extends Component{
    render(){
        return(
            <div>
                <img className="cookiesImg" src={cookiesImg} alt="cookiesImg"/>
                <div className="headTitle">עוגיות</div>
            </div>
        )
    }
}

export default Cookies;