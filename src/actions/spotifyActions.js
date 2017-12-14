import {
    SPOTIFY_FAILURE, SPOTIFY_SUCCESS, SPOTIFY_REQUEST, CLEAR_SEARCH, GET_TOKEN,
    PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE
} from './actionsTypes';

const API_BASE = 'https://api.spotify.com/v1';

const spotifyRequest = () => {
    return {
        type: SPOTIFY_REQUEST,
        loading: true,
        error: null,
    };
};

const spotifySuccess = (json) => {
    return {
        type: SPOTIFY_SUCCESS,
        loading: false,
        error: null,
        data: json,
    };
};

const spotifyFailure = (json) => {
    return {
        type: SPOTIFY_FAILURE,
        loading: false,
        error: json,
    };
};

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH,
        data: {},
    };
};



export function requestSpotify(token, part, query='', type='') {
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
    };
    const url = `${API_BASE}/${part}${query}${type}`;
    return (dispatch) => {
        dispatch(spotifyRequest());
        fetch(url,
            {
                headers: headers
            })
            .then ((response) => response.json())
            .then ((items) => dispatch(spotifySuccess(items)))
            .catch ((error) => dispatch(spotifyFailure(error)));
    };
}

const saveToken = (token) => {
    return {
        type: GET_TOKEN,
        token: token,
    };
};

export function passToken(token) {
    return (dispatch) => {
        dispatch(saveToken(token));
    //    dispatch(getProfile(token));
    }
}

const profileRequest = () => {
    return {
        type: PROFILE_REQUEST,
        loading: true,
        error: null,
    };
};

const profileSuccess = (json) => {
    return {
        type: PROFILE_SUCCESS,
        loading: false,
        error: null,
        data: json,
    };
};

const profileFailure = (json) => {
    return {
        type: PROFILE_FAILURE,
        loading: false,
        error: json,
    };
};

export function getProfile(token) {
    const url = `https://api.spotify.com/v1/me`;
    const headers = {
        "Accept": "application/json",
        'Authorization': 'Bearer '+ token
    };
    return (dispatch) => {
        dispatch(profileRequest());
        console.log('getProfile: profileReqeust() dispatching.. getting token');
        fetch(url,
            {
                headers: headers,
            })
            .then((response) => response.json())
            .then ((items) => profileSuccess(items))
            .catch ((error) => profileFailure(error));
    };
};

