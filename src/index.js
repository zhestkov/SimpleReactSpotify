import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './index.css';
import { Provider } from 'react-redux';
import {Router, Route, Switch, BrowserHistory} from 'react-router';
import App from './App';
3
const render = Component => {
  ReactDOM.render(
    <AppContainer>
        <Provider store={ store }>

        </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}