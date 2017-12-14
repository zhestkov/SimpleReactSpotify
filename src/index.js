import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import './index.css';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { history } from './utils/history';
import { store } from './utils/configureStore';

const render = Component => {
  ReactDOM.render(
    <AppContainer>

            <Component history={ history }/>
    </AppContainer>,
    document.getElementById('root'),
  )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}