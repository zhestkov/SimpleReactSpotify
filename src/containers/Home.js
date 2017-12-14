import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { scopes } from '../utils/spotifyApiUtils';
import PropTypes from 'prop-types';
import * as actions from '../actions/spotifyActions';

const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = 'fbc383f490184d1db583383a1ebd2f7a';
const CLIENT_SECRET = '943cfdac36354dcaa78a921e785ebcb1';
const REDIRECT_URI = 'http://localhost:3000/login/callback';


class Home extends Component {
    constructor(props) {
        super(props);
        this.auth = this.auth.bind(this);
    }

    auth() {
        window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=token&scope=${scopes.playlistReadPrivate} ${scopes.userReadEmail} ${scopes.playlistReadCollaborative}&redirect_uri=${REDIRECT_URI}`;
    }
    render() {
        const {actions, spotify, profile } = this.props;
        console.log('spotify:', spotify);
        return (
            <div className='homePage'>
                {
                    (spotify.token.length > 1) ?
                        (
                            <div>
                                <h2>Hi, {profile.data.display_name}</h2>
                                <img src={profile.data.images[0].url} alt={profile.data.display_name}/>
                            </div>
                        ) : (
                          <div>
                              <h2>Welcome, Spotify user. You should login first!</h2>
                              <p onClick={this.auth}>Authorize!</p>
                          </div>
                        )
                }
            </div>
        );
    }
}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
    spotify: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
    const {spotify, profile} = state;
    return {
        spotify,
        profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Home);
