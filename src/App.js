import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./utils/configureStore";
// import BrowserRouter from "react-router-dom";


class App extends Component {



  render() {
    const { history } = this.props;
    return (
        <Provider store={ store }>
            <BrowserRouter history={history}>
                {routes}
            </BrowserRouter>


        </Provider>


    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default App;
