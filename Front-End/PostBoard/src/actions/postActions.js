import axios from 'axios';
import {GET_ERRORS, GET_POSTS, GET_POST} from "./types";
// THIS PAGE HANDLES AXIOS

{/** async says it gives a promise, await says react has to wait for the response */}
export const createAPost = (post, history) => async dispatch => {
    try{
        const res = await axios.post("http://localhost:8080/api/post", post)
        history.push("/Dashboard")

        dispatch({
            type: GET_ERRORS,
            payload: ""
        });

    } catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getPosts = () => async dispatch => {

    const res = await axios.get("http://localhost:8080/api/post/all")
    dispatch({
        type: GET_POSTS,
        payload: res.data
    })
}

export const getPost = (id,history) => async dispatch => {
    try{
    const res = await axios.get(`http://localhost:8080/api/post/${id}`)
    dispatch({
        type: GET_POST,
        payload: res.data
    })
    }catch(error){

        history.push("/Dashboard")
    }
    
}