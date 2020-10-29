import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';
import './header.css';

class Header extends Component{
    render(){
        return(
            <div className="title">
                <Icon name="heart" className="titleIcon"/>
                המתכונים של מגי 
            </div>
        )
    }
}
export default Header;