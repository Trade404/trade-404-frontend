import axios from "axios"
import { FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS } from "./ActionTypes"

export const getCoinList = (page) => async(dispatch) => {

    dispatch({type:FETCH_COIN_LIST_REQUEST})

    const baseUrl = "http://localhost:4040"

    try {
        const {data} =  await axios.get(`${baseUrl}/coins?page=${page}`)
        console.log(data)

        dispatch({type:FETCH_COIN_LIST_SUCCESS, payload:data})

    } catch(error) {
        dispatch({type:FETCH_COIN_LIST_FAILURE, payload:error.message})
        console.log(error)
    }
    
}