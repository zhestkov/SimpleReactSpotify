import {SPOTIFY_REQUEST, SPOTIFY_FAILURE, SPOTIFY_SUCCESS, GET_TOKEN} from "../actions/actionsTypes";
import { initialState } from './initialState';

export default function spotifyReducer (state = initialState.spotify, action) {
    switch (action.type) {
        case SPOTIFY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SPOTIFY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.data
            };
        case SPOTIFY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.data,
            };
        case GET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
}