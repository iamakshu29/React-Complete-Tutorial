import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Sweets from './Sweets';
import Menu from './Menu';
import All from './All';

const User = () => {
    return (
        <React.Fragment>
            <Menu />
            <Switch>
                <Route exact path='/' component={All} />
                <Route exact path='/lunch' component={Lunch} />
                <Route exact path='/dinner' component={Dinner} />
                <Route exact path='/sweets' component={Sweets} />
            </Switch>
        </React.Fragment>
    );
};

export default User;