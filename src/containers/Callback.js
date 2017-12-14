import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import {scopes} from "../utils/spotifyApiUtils";
import * as actions from "../actions/spotifyActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const queryString = require('query-string');


const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = 'fbc383f490184d1db583383a1ebd2f7a';
const CLIENT_SECRET = '943cfdac36354dcaa78a921e785ebcb1';
const REDIRECT_URI = 'http://localhost:3000/login/callback';



class Callback extends Component {
    constructor(props) {
        super(props);
        this.auth = this.auth.bind(this);
    }

    componentDidMount() {
        const { actions, spotify, profile } = this.props;
        const parsedHash = queryString.parse(window.location.hash);
        if (parsedHash.access_token)
            actions.passToken(parsedHash.access_token);
        console.log(`parsedHash.access_token=${parsedHash.access_token}`);
        console.log(`TOKEN: ${spotify.token}`);
        console.log(profile);
        // window.location.href = '/';
    }

    auth() {
        window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=token&scope=${scopes.playlistReadPrivate} ${scopes.userReadEmail} ${scopes.playlistReadCollaborative}&redirect_uri=${REDIRECT_URI}`;
    }

    render() {

        return (
            null
        )
    }

}

const mapStateToPros = (state) => {
    const {spotify, profile } = state;
    return {
        spotify,
        profile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
};


export default connect(
    mapStateToPros,
    mapDispatchToProps,
)(Callback);