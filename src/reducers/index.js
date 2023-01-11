import { combineReducers } from "redux";
import ArtistReducer from "./Artists";
import ProfileReducer from "./Profile"

export default combineReducers({
    ArtistReducer, ProfileReducer
})