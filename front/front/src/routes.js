import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewUser from './pages/NewUser';
import Edit from './pages/Edit';
import Home from './pages/Home';

export default function Routes() {
   return( <BrowserRouter>
     <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />

        <Route path="/profile" component={Profile} />
        <Route path="/user/new" component={NewUser} />
        <Route path="/user/edit" component={Edit} />
        <Route path="/home" component={Home} />

     </Switch>
    </BrowserRouter>
   );
}