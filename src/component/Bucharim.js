import React, { Component } from 'react';
import './Bucharim.css';
import { Card, Image,Button } from 'semantic-ui-react'
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
                    <Card style={{marginTop:20,height:320}}>
                        <Image src={Dushpere} wrapped ui={false} style={{height:255}}/>
                        <Card.Content >
                        <Button fluid inverted color='red'>דושפרה</Button>
                        </Card.Content>
                    </Card>
                    <Card style={{marginTop:20}}>
                        <Image src={GrapeLeaves} wrapped ui={false} style={{height:255}}/>
                        <Card.Content >
                        <Button fluid inverted color='red'>עלי גפן</Button>
                        </Card.Content>
                    </Card>
                    <Card style={{marginTop:20,height:325}}>
                        <Image src={SoupUro} wrapped ui={false} style={{height:255}}/>
                        <Card.Content >
                        <Button fluid inverted color='red'>מרק אורו</Button>
                        </Card.Content>
                    </Card>
                    <Card style={{marginTop:20,height:325}}>
                        <Image src={Bahsh} wrapped ui={false} style={{height:255}}/>
                        <Card.Content >
                        <Button fluid inverted color='red'>באחש</Button>
                        </Card.Content>
                    </Card>
                    <Card style={{marginTop:20,height:325}}>
                        <Image src={Mantu} wrapped ui={false} style={{height:255}}/>
                        <Card.Content >
                        <Button fluid inverted color='red'>מנטו</Button>
                        </Card.Content>
                    </Card>
                    <Card style={{marginTop:20,height:325}}>
                        <Image src={Osvo} wrapped ui={false} style={{height:255}}/>
                        <Card.Content >
                        <Button fluid inverted color='red'>אוסבו</Button>
                        </Card.Content>
                    </Card>
                    <Card style={{marginTop:20,height:325}}>
                        <Image src={Burecas} wrapped ui={false} style={{height:255}}/>
                        <Card.Content >
                        <Button fluid inverted color='red'>בורקסים</Button>
                        </Card.Content>
                    </Card>
                    <Card style={{marginTop:20,height:325}}>
                        <Image src={Kovroran} wrapped ui={false} style={{height:255}}/>
                        <Card.Content >
                        <Button fluid inverted color='red'>קוורורן</Button>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Bucharim;