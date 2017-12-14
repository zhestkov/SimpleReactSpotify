import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/spotifyActions';
import { Link } from 'react-router-dom';
import {scopes} from "../utils/spotifyApiUtils";
import './Nav.css';
const queryString = require('query-string');


const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = 'fbc383f490184d1db583383a1ebd2f7a';
const CLIENT_SECRET = '943cfdac36354dcaa78a921e785ebcb1';
const REDIRECT_URI = 'http://localhost:3000/login/callback';

class Nav extends Component {

    componentWillMount() {
        const parsed = queryString.parse(window.location.hash);
        if (parsed.access_token) {
            this.props.actions.passToken(parsed.access_token);
        }
    }
    auth() {
        window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=token&scope=${scopes.playlistReadPrivate} ${scopes.userReadEmail} ${scopes.playlistReadCollaborative}&redirect_uri=${REDIRECT_URI}`;
    }

    render() {
        const { actions, spotify, profile } = this.props;
        return (
            <div>
                <ul className='topnav'>
                    <li><Link to='/releases'>New Releases</Link></li>
                    <li><Link to='/playlists'>My playlists</Link></li>
                </ul>

                <ul className='logo__right'>
                    <div>
                        {
                            (profile.data.images) ? (<img src={profile.data.images && profile.data.images[0].url}/>)
                                :
                                <div></div>
                                // <p onClick={this.auth}>Click Here to Authorize</p>
                        }
                    </div>
                </ul>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {spotify, profile } = state;
    return {
        spotify,
        profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (Nav);