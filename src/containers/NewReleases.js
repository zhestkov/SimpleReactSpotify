import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/spotifyActions';
import Releases from "../components/Releases/Releases";
import {Auth} from "../components/Auth/Auth";

class NewReleases extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { spotify } = this.props;
        this.props.actions.searchSpotify('browse/new-releases', spotify.token);
    }

    render() {
        const { spotify, actions } = this.props;
        return (
            <div className='text-center'>
                {
                    (spotify.token.length > 1) ?
                        (
                            <div>
                                <h2>New releases:</h2>
                                <Releases spotify={spotify}/>
                            </div>
                        ) : (
                            <Auth/>
                        )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { spotify, profile } = state;
    return {
        spotify,
        profile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (NewReleases);
