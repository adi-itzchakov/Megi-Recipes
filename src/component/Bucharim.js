import React, { Component } from 'react';
import './Bucharim.css';
import background2 from '../pictures/background2.jpg';
import Dushpere from '../pictures/dushpere.jpeg';
import GrapeLeaves from '../pictures/GrapeLeaves.jpg';
import SoupUro from '../pictures/soupuro.jpg';
import Bahsh from '../pictures/bahsh.jpeg';
import Mantu from '../pictures/mantu.jpeg';
import Osvo from '../pictures/osvo.jpeg';
import Burecas from '../pictures/burecas.jpeg';
import Kovroran from '../pictures/kovroran.jpeg';
//import Makaron_Kovroran from '../pictures/makaron-kovroran.jpeg';
//import Haltisvo from '../pictures/haltisvo.jpeg';

import './pictures.css';


class Bucharim extends Component{
    render(){
        return(
            <div>
                <img className="background2" src={background2} alt="background2"/>
                <div className="headTitle">מאכלים בוכריים</div>
                <div className="startCards">
                    <p className="btnDushpere">
                        <span>
                            <img src={Dushpere} className="img1"/>
                        </span>
                    <button className="btnAll">דושפרה</button> 
                    </p>
                    <p className="btnGrapeLeaves">
                        <span>
                            <img src={GrapeLeaves} className="img1"/>
                        </span>
                    <button className="btnAll">עלי גפן</button> 
                    </p>
                    <p className="btnSoupUro">
                        <span>
                            <img src={SoupUro} className="img1"/>
                        </span>
                    <button className="btnAll">מרק אורו</button> 
                    </p>
                    <p className="btnBahsh">
                        <span>
                            <img src={Bahsh} className="img1"/>
                        </span>
                    <button className="btnAll">באחש</button> 
                    </p>
                    <p className="btnMantu">
                        <span>
                            <img src={Mantu} className="img1"/>
                        </span>
                    <button className="btnAll">מנטו</button> 
                    </p>
                    <p className="btnOsvo">
                        <span>
                            <img src={Osvo} className="img1"/>
                        </span>
                    <button className="btnAll">אוסבו</button> 
                    </p>
                    <p className="btnBurecas">
                        <span>
                            <img src={Burecas} className="img1"/>
                        </span>
                    <button className="btnAll">בורקסים</button> 
                    </p>
                    <p className="btnKovroran">
                        <span>
                            <img src={Kovroran} className="img1"/>
                        </span>
                    <button className="btnAll">קוורורן</button> 
                    </p>
                </div>
            </div>
        )
    }
}

export default Bucharim;