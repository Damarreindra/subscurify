import axios from "axios"

export const GET_ARTIST = "GET_ARTIST"

export const getArtist = () =>{
    const access_token = localStorage.getItem('token')
    return (dispatch)=>{
        dispatch({
            type : GET_ARTIST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "GET",
            url : "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=36&offset=5",
             headers : {Authorization: `Bearer ${access_token}`}
        })
            .then((res)=>{
                dispatch({
                    type : GET_ARTIST,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_ARTIST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}
