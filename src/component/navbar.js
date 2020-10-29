import React, { Component } from 'react';
import {Menu,Input} from 'semantic-ui-react';
import './navbar.css';

class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({
       activeItem: name,
      })

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
                onClick={this.handleItemClick}
              />
              <Menu.Menu position='right'>
              <Menu.Item
                name='salads'
                active={activeItem === 'salads'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='עוגיות'
                active={activeItem === 'עוגיות'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='עוגות'
                active={activeItem === 'עוגות'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='מאכלים בוכרים'
                active={activeItem === 'מאכלים בוכרים'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
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