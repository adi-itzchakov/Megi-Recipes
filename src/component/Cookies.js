import React, { Component } from 'react';
import cookiesImg from '../pictures/cookies.jpg';
import {Button} from 'semantic-ui-react';
import './pictures.css';
import './cookies.css';
import Shosanim from '../pictures/shosanim.jpeg';

class Cookies extends Component{
    render(){
        return(
            <div>
                <img className="cookiesImg" src={cookiesImg} alt="cookiesImg"/>
                <div className="headTitle">עוגיות</div>
                <div className="startCards">
                    <p className="btnShosanim">
                        <span>
                            <img src={Shosanim} className="img1"/>
                        </span>
                    <button className="btnAll">שושנים</button> 
                    </p>
                </div>
            </div>
        )
    }
}

export default Cookies;