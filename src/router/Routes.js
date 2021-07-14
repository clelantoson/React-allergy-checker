import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Product from '../components/Product'
import Login from '../components/Login'

function Routes(props) {
    return (
        <Switch>
             <Route exact path="/" />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/product" component={Product}/>
        </Switch>
    )
}
export default Routes;
