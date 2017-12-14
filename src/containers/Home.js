import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/spotifyActions';
import { Link } from 'react-router';
import {scopes} from "../utils/spotifyApiUtils";
import './Home.css';



const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = 'fbc383f490184d1db583383a1ebd2f7a';
const CLIENT_SECRET = '943cfdac36354dcaa78a921e785ebcb1';
const REDIRECT_URI = 'http://localhost:3000/login/callback';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.auth= this.auth.bind(this);
    }

    auth() {
        window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=token&scope=${scopes.playlistReadPrivate} ${scopes.userReadEmail} ${scopes.playlistReadCollaborative}&redirect_uri=${REDIRECT_URI}`;
    }

    render() {
        const { actions, spotify, profile } = this.props;
        console.log("spotify", spotify,  )
        return (
            <div className="info">
                <div className = "container">
                    <div className="row">
                        <div className="text-center">
                            {
                                (spotify.token.length > 2 ) ?
                                    (
                                        <div>
                                            <h2> Hi, {profile.data.display_name } </h2>
                                            {/*<img src = {profile.data.images&&profile.data.images[0].url }/>*/}
                                        </div>
                                    ):(
                                        <div>
                                            <h2> Welcome! <br/> Please authorize to continue</h2>
                                            <button className='btn btn-primary' bsStyle="info" onClick={this.auth}>Authorize</button>
                                        </div>
                                    )
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

Home.propTypes = {
    actions: PropTypes.object.isRequired,
    spotify: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { spotify,  profile } = state;
    return {
        spotify, profile
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);