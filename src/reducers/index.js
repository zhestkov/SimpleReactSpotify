import { combineReducers } from 'redux';
import profileReducer from "./profileReducer";
import  spotifyReducer from "./spotifyReducer";
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    routing: routerReducer,
    spotify: spotifyReducer,
    profile: profileReducer
});
export default rootReducer;