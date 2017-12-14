import React from 'react';
import { Route, Switch} from 'react-router';
import Home from './containers/Home';
// import Login from 'containers/Login';
// import Playlist from 'containers/Playlist';
import App from './components/App';
import Callback from "./containers/Callback";
import Playlist from "./containers/Playlist";
import NewReleases from "./containers/NewReleases";
// import { BrowserRouter }  from 'react-router-dom';

export const routes = (
    <Switch>
        <App>
            <Route path='/' component={Home}/>
            <Route path='/playlists' component={Playlist}/>
            <Route path='/releases' component={NewReleases}/>
        </App>
    </Switch>

);

export default routes;