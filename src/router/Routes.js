import React from 'react';
import { Route, Switch} from 'react-router-dom';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/"/>
            {/* <Route path="/profil" component={Profil}/>
            <Route path="/product" component={Product}/> */}
            {/* <Route path="/recents" component={recents}/> */}
            {/* <Route path="/" component={}/> */}
            {/* <Route path="/" component={}/> */}
        </Switch> 
    );
}
 
export default Routes;