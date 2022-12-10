import { GET_ARTIST } from "../../actions/spotifyAction"

const initialState = {
    getArtistResult: false,
    getArtistLoading: false,
    getArtistError: false,
}

const Artist = (state = initialState, action)=>{
    switch(action.type){
        case GET_ARTIST:
            return {
              ...state,
              getArtistResult: action.payload.data,
              getArtistLoading: action.payload.loading,
              getArtistError: action.payload.errorMessage,
            };
            default:
                return state;
    }
}

export default Artist