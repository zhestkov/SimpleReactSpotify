import React from 'react';
import { IndexRoute, Route, Switch} from 'react-router';
import Home from './containers/Home';
// import Login from 'containers/Login';
// import Playlist from 'containers/Playlist';
import App from './components/App';
// import { BrowserRouter }  from 'react-router-dom';

export const routes = (
    <Switch>
        <App>
            <Route path='/' component={Home}/>
        </App>
    </Switch>

);

export default routes;