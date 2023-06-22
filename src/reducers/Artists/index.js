import {
  GET_ARTIST,
  GET_ARTIST_SHORT,
  GET_ARTIST_LONG,
  GET_SONG,
} from "../../actions/spotifyAction";

const initialState = {
  getArtistResult: false,
  getArtistLoading: false,
  getArtistError: false,

  getArtistShortResult: false,
  getArtistShortLoading: false,
  getArtistShortError: false,

  getArtistLongResult: false,
  getArtistLongLoading: false,
  getArtistLongError: false,

  getSongResult: false,
  getSongLoading: false,
  getSongError: false,
};

const Artist = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        getArtistResult: action.payload.data,
        getArtistLoading: action.payload.loading,
        getArtistError: action.payload.errorMessage,
      };

    case GET_ARTIST_SHORT:
      return {
        ...state,
        getArtistShortResult: action.payload.data,
        getArtistShortLoading: action.payload.loading,
        getArtistShortError: action.payload.errorMessage,
      };

    case GET_ARTIST_LONG:
      return {
        ...state,
        getArtistLongResult: action.payload.data,
        getArtistLongLoading: action.payload.loading,
        getArtistLongError: action.payload.errorMessage,
      };

    case GET_SONG:
      return {
        ...state,
        getSongResult: action.payload.data,
        getSongLoading: action.payload.loading,
        getSongError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default Artist;
