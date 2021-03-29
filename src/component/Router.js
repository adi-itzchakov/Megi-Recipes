import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from '../component/home';
import BucharimList from '../Recipes/basicInfo/BucharimList.js';
import CookiesList from '../Recipes/basicInfo/CookiesList.js';
import CakesList from '../Recipes/basicInfo/CakesList.js';
import SaladsList from '../Recipes/basicInfo/SaladsList.js';


class Routers extends Component{
    render(){
        return(
            <Switch>
                <Route path='/salads' component={SaladsList}/>
                <Route path='/cookies' component={CookiesList}/>
                <Route path='/cakes' component={CakesList}/>
                <Route path='/bucharim' component={BucharimList}/>
                <Route exact path='/' component={Home}/>
            </Switch>
        )
    }
}
export default Routers;

