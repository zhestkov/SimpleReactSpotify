import {PROFILE_REQUEST, PROFILE_FAILURE, PROFILE_SUCCESS} from "../actions/actionsTypes";
import { initialState } from './initialState';

export default function profileReducer(state = initialState.profile, action) {
    switch (action.type) {
        case PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.data,
            };
        case PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.data

            };
        default:
            return state;
    }
}
