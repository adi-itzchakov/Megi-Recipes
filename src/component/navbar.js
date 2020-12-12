import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Menu,Input} from 'semantic-ui-react';
import './navbar.css';

class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({
       activeItem: name,
      })
    
    handleContactClick =() => {
      window.scrollTo({
        top: 690,
        behavior: 'smooth',
    });
    }

    render(){
    const { activeItem } = this.state

        return(
            <div className="navbar">
            <Menu pointing secondary>
              <Menu.Item>
                <Input icon='search' placeholder='חיפוש באתר' />
              </Menu.Item>
              <Menu.Item
                name='צור קשר'
                active={activeItem === 'צור קשר'}
                onClick={this.handleContactClick}
              />
              <Menu.Menu position='right'>
              <Menu.Item as={Link} to='/salads'
                name='סלטים'
                active={activeItem === 'סלטים'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='/cookies'
                name='עוגיות'
                active={activeItem === 'עוגיות'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='/cakes'
                name='עוגות'
                active={activeItem === 'עוגות'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='/bucharim'
                name='מאכלים בוכרים'
                active={activeItem === 'מאכלים בוכרים'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='/'
                name='דף הבית'
                active={activeItem === 'דף הבית'}
                onClick={this.handleItemClick}
              />
                </Menu.Menu>
            </Menu>
          </div>
        )
    }
}

export default Navbar;