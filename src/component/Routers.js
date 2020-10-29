import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Home from '../component/home';
import Bucharim from '../component/Bucharim';
import Cakes from '../component/Cakes';
import Cookies from '../component/Cookies';
import Salads from '../component/Salads';

class Routers extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/salads' component={Salads}/>
                    <Route path='/עוגיות' component={Cookies}/>
                    <Route path='/עוגות' component={Cakes}/>
                    <Route path='/מאכלים בוכרים' component={Bucharim}/>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routers;

