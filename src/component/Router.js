import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from '../component/home';
import Bucharim from '../component/Bucharim';
import Cakes from '../component/Cakes';
import Cookies from '../component/Cookies';
import Salads from '../component/Salads';

class Routers extends Component{
    render(){
        return(
            <Switch>
                <Route path='/salads' component={Salads}/>
                <Route path='/cookies' component={Cookies}/>
                <Route path='/cakes' component={Cakes}/>
                <Route path='/bucharim' component={Bucharim}/>
                <Route exact path='/' component={Home}/>
            </Switch>
        )
    }
}
export default Routers;

