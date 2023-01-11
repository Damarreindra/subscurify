import { GET_UNAME } from "../../actions/spotifyAction"

const initialState = {
    getUnameResult: false,
    getUnameLoading: false,
    getUnameError: false,
}

const Profile = (state = initialState, action)=>{
    switch(action.type){
        case GET_UNAME:
            return {
              ...state,
              getUnameResult: action.payload.data,
              getUnameLoading: action.payload.loading,
              getUnameError: action.payload.errorMessage,
            };
            default:
                return state;
    }
}

export default Profile